/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const prettierConfig = {
	plugins: ['prettier-plugin-tailwindcss'],
	tailwindFunctions: ['clsx', 'cva'],
	arrowParens: 'avoid',
	bracketSameLine: false,
	bracketSpacing: true,
	htmlWhitespaceSensitivity: 'css',
	insertPragma: false,
	jsxSingleQuote: true,
	printWidth: 80,
	proseWrap: 'always',
	quoteProps: 'as-needed',
	requirePragma: false,
	semi: true,
	singleQuote: true,
	tabWidth: 2,
	trailingComma: 'es5',
	useTabs: true,
};

export default prettierConfig;
