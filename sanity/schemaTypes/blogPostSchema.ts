// import { defineType, defineArrayMember } from 'sanity';

// /**
//  * This is the schema definition for the rich text fields used for
//  * for this blog studio. When you import it in schemas.js it can be
//  * reused in other parts of the studio with:
//  *  {
//  *    name: 'someName',
//  *    title: 'Some title',
//  *    type: 'blockContent'
//  *  }
//  */
// export default defineType({
// 	title: 'Block Content',
// 	name: 'blockContent',
// 	type: 'array',
// 	of: [
// 		defineArrayMember({
// 			title: 'Block',
// 			type: 'block',
// 			// Styles let you set what your user can mark up blocks with. These
// 			// correspond with HTML tags, but you can set any title or value
// 			// you want and decide how you want to deal with it where you want to
// 			// use your content.
// 			styles: [
// 				{ title: 'Normal', value: 'normal' },
// 				{ title: 'H1', value: 'h1' },
// 				{ title: 'H2', value: 'h2' },
// 				{ title: 'H3', value: 'h3' },
// 				{ title: 'H4', value: 'h4' },
// 				{ title: 'Quote', value: 'blockquote' },
// 			],
// 			lists: [{ title: 'Bullet', value: 'bullet' }],
// 			// Marks let you mark up inline text in the block editor.
// 			marks: {
// 				// Decorators usually describe a single property – e.g. a typographic
// 				// preference or highlighting by editors.
// 				decorators: [
// 					{ title: 'Strong', value: 'strong' },
// 					{ title: 'Emphasis', value: 'em' },
// 				],
// 				// Annotations can be any object structure – e.g. a link or a footnote.
// 				annotations: [
// 					{
// 						title: 'URL',
// 						name: 'link',
// 						type: 'object',
// 						fields: [
// 							{
// 								title: 'URL',
// 								name: 'href',
// 								type: 'url',
// 							},
// 						],
// 					},
// 				],
// 			},
// 		}),
// 		// You can add additional types here. Note that you can't use
// 		// primitive types such as 'string' and 'number' in the same array
// 		// as a block type.
// 		defineArrayMember({
// 			type: 'image',
// 			options: { hotspot: true },
// 		}),
// 	],
// });

import { BookIcon } from '@sanity/icons';
import { format, parseISO } from 'date-fns';
import { defineField, defineType } from 'sanity';

import author from './authorSchema';

/**
 * This file is the schema definition for a post.
 *
 * Here you'll be able to edit the different fields that appear when you 
 * create or edit a post in the studio.
 * 
 * Here you can see the different schema types that are available:

  https://www.sanity.io/docs/schema-types

 */

export default defineType({
	name: 'blogPost',
	title: 'Blog Post',
	icon: BookIcon,
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 96,
				isUnique: (value, context) =>
					context.defaultIsUnique(value, context),
			},
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: 'content',
			title: 'Content',
			type: 'array',
			of: [
				{ type: 'block' },
				{
					type: 'image',
					options: {
						hotspot: true,
					},
					fields: [
						{
							name: 'caption',
							type: 'string',
							title: 'Image caption',
							description: 'Caption displayed below the image.',
						},
						{
							name: 'alt',
							type: 'string',
							title: 'Alternative text',
							description: 'Important for SEO and accessiblity.',
						},
					],
				},
			],
		}),
		defineField({
			name: 'excerpt',
			title: 'Excerpt',
			type: 'text',
		}),
		defineField({
			name: 'coverImage',
			title: 'Cover Image',
			type: 'image',
			options: {
				hotspot: true,
			},
			fields: [
				{
					name: 'alt',
					title: 'Alt',
					type: 'string',
				},
			],
		}),
		defineField({
			name: 'date',
			title: 'Date',
			type: 'datetime',
			initialValue: () => new Date().toISOString(),
		}),
		defineField({
			name: 'author',
			title: 'Author',
			type: 'reference',
			to: [{ type: 'author' }],
			
		}),
	],
	preview: {
		select: {
			title: 'title',
			author: 'author.name',
			date: 'date',
			media: 'coverImage',
		},
		prepare({ title, media, author, date }) {
			const subtitles = [
				author && `by ${author}`,
				date && `on ${format(parseISO(date), 'LLL d, yyyy')}`,
			].filter(Boolean);

			return { title, media, subtitle: subtitles.join(' ') };
		},
	},
});
