export default {
	name: 'testimonial',
	title: 'Testimonial',
	// icon: WrenchIcon,
	type: 'document',
	fields: [
		{ name: 'name', title: 'Name', type: 'string' },
		{ name: 'about', title: 'About', type: 'string' },

		{
			name: 'image',
			title: 'Image',
			type: 'image',
			options: { hotspot: true },
			fields: [{ name: 'alt', title: 'Alt', type: 'string' }],
		},

		{ name: 'testimony', title: 'Testimony', type: 'string' },
	],
};
