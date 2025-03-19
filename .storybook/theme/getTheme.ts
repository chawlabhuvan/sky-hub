import { create } from '@storybook/theming/create';
import logoUrl from '../Genesis_logo.svg';

const computeStyle = (cssVar: string) =>
	getComputedStyle(document.documentElement).getPropertyValue(cssVar);

// https://github.com/storybookjs/storybook/blob/next/code/lib/theming/src/types.ts
export const getTheme = ({ base }) => {
	return create({
		base,
		// Typography
		fontBase: '"Fira code", sans-serif',
		fontCode: 'monospace',

		brandTitle: 'GenesisX',
		brandUrl: 'https://genesisx.netlify.app/',
		brandImage: logoUrl,
		brandTarget: '_self',

		// Brand
		colorPrimary: computeStyle('--color-primary'),
		colorSecondary: computeStyle('--color-secondary'),

		// UI
		appBg: computeStyle('--color-secondary-foreground'),
		appContentBg: computeStyle('--color-secondary-foreground'),
		appBorderColor: computeStyle('--color-primary-foreground'),
		appBorderRadius: 1,

		// Text colors
		textColor: computeStyle('--color-primary-foreground'),
		textInverseColor: computeStyle('--color-secondary'),

		// Toolbar default and active colors
		barTextColor: computeStyle('--color-primary-foreground'),
		barHoverColor: computeStyle('--color-tertiary-foreground'),
		barSelectedColor: computeStyle('--color-secondary'),
		barBg: computeStyle('--color-secondary-foreground'),

		// Form colors
		buttonBg: computeStyle('--color-primary'),
		buttonBorder: 'transparent',
		inputBg: 'transparent',
		inputBorder: computeStyle('--color-primary-foreground'),
		inputTextColor: computeStyle('--color-primary-foreground'),
		inputBorderRadius: 0.25,
	});
};
