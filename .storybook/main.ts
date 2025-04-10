import type { StorybookConfig } from '@storybook/react-vite';
import remarkGfm from 'remark-gfm';
import turbosnap from 'vite-plugin-turbosnap';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  async viteFinal(config, { configType }) {
		return mergeConfig(config, {
			plugins:
				configType === 'PRODUCTION'
					? [
							turbosnap({
								rootDir: config.root ?? process.cwd(),
							}),
						]
					: [],
		});
	},
	stories: [
		'../libs/**/*.stories.@(js|jsx|mjs|ts|tsx)',
		'../docs/**/*.mdx',
		'../libs/**/*.doc.mdx',
	],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/addon-a11y',
		{
			name: '@storybook/addon-docs',
			options: {
				mdxPluginOptions: {
					mdxCompileOptions: {
						remarkPlugins: [remarkGfm],
					},
				},
			},
		},
		'@storybook/addon-themes',
		'@chromatic-com/storybook',
	],
	framework: {
		name: '@storybook/react-vite',
		options: {},
	},
	docs: {},
	core: {
		builder: {
			name: '@storybook/builder-vite',
			options: {
				viteConfigPath: './vite.config.ts',
			},
		},
	},
	typescript: {
		reactDocgen: 'react-docgen-typescript',
		check: true,
		reactDocgenTypescriptOptions: {
			/**
			 * There is a bug in storybook.
			 * StoryFn declared using `_args` won't use the displayName by default.
			 */
			componentNameResolver: expression => {
				return expression.getName();
			},
		},
	},
};

export default config;
