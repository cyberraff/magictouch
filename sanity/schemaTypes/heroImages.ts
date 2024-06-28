import { ImagesIcon } from '@sanity/icons';
export default {
	name: 'heroImage',
	type: 'document',
	icon: ImagesIcon,
	title: 'Two Hero & one BG Images',
	fields: [
		{ name: 'image1', type: 'image', title: 'First Image' },
		{ name: 'image2', type: 'image', title: 'Second Image' },
		{ name: 'bgImg', type: 'image', title: 'Background Image' },
	],
};
