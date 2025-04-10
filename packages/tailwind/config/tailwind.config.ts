import { baseTheme } from '../themes';

const content = [
  './src/**/*.{js,ts,jsx,tsx}',
	'./pages/**/*.{js,ts,jsx,tsx}',
  /**
   * For packages with no scope, provide the path to individual ui component as follows:
   * "../../node_modules/my-react-button/dist/index.js",
   * and then replace it with the below line.
   *
   * If you are working with scoped packages, you can remove the entire comment block.
  */
  '../../node_modules/@sky-hub/**/**/index.js',
];

/** @type {import('tailwindcss').Config} */
export const tailwindConfig = {
	darkMode: ['class', '[data-mode="dark"]'],
	content,
	theme: {
		...baseTheme,
		// add more themes
	},
	plugins: [],
};
