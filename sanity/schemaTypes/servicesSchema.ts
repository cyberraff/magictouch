import { WrenchIcon } from '@sanity/icons';

export default {
	name: 'service',
	title: 'Services',
	icon: WrenchIcon,
	type: 'document',
	fields: [
		{ name: 'name', title: 'Name', type: 'string' },
		// {
		// 	name: 'slug',
		// 	title: 'Slug',
		// 	type: 'slug',
		// 	options: { source: 'name' },
		// },
		{
			name: 'image',
			title: 'Image',
			type: 'image',
			options: { hotspot: true },
			fields: [{ name: 'alt', title: 'Alt', type: 'string' }],
		},
		{
			name: 'content',
			title: 'Content',
			type: 'array',
			of: [{ type: 'block' }],
		},
		{name:"excerpt",title:"Excerpt",type:"string"}
	],
};
