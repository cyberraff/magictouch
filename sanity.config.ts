import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import schemaTypes from './sanity/schemaTypes';

const config = defineConfig({
	name: 'default',
	title: 'cyberraff',
	projectId: '6tv52o0t',
	dataset: 'production',
	apiVersion: '2024-05-01',
	basePath: '/admin',

	plugins: [structureTool(), visionTool()],
	schema: {
		types: schemaTypes,
	},
});

export default config;
