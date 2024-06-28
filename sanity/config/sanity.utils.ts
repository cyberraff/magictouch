import ImageUrlBuilder from '@sanity/image-url';

import { createClient } from 'next-sanity';

const config = {
	projectId: '6tv52o0t',
	dataset: 'production',
	apiVersion: '2024-06-14',
	useCdn: false,
};

export const client = createClient(config);

const builder = ImageUrlBuilder(client);

export function urlFor(source: any) {
	return builder.image(source);
}
