import { ImagesIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'images',
	type: 'document',
	icon: ImagesIcon,
	title: 'All Images',
	fields: [
		{ name: 'name', type: 'string', title: 'Title' },

		{
			name: 'image',
			type: 'image',
			title: 'Image',
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
		},
	],
});