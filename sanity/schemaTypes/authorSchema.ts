import { UserIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'author',
	title: 'Author',
	icon: UserIcon,
	type: 'document',
	fields: [
		defineField({
			name: 'name',
			title: 'Name',
			type: 'string',
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: 'picture',
			title: 'Picture',
			type: 'image',
			fields: [
				{
					name: 'alt',
					type: 'string',
					title: 'Alternative text',
					description: 'Important for SEO and accessiblity.',
				},
			],
			options: { hotspot: true },
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: 'about',
			title: 'About',
			type: 'array',
			of: [{ type: 'block' }],
		}),
		defineField({
			name: 'socialMedia',
			title: 'Social Media',
			type: 'array',
			of: [
				{
					type: 'object',
					name: 'socialMediaLink',
					title: 'Social Media Link',
					fields: [
						{
							name: 'platform',
							title: 'Platform',
							type: 'string',
							validation: (rule) => rule.required(),
						},
						{
							name: 'url',
							title: 'URL',
							type: 'url',
							validation: (rule) =>
								rule.required().uri({
									scheme: ['http', 'https'],
								}),
						},
					
					],
				},
			],
		}),
	],
});
