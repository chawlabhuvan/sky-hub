import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import jsxA11Y from 'eslint-plugin-jsx-a11y';
import prettier from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
});

/** @type {import('eslint').Linter.Config[]} */
export default [
	{
		ignores: [
			'**/dist',
			'**/coverage',
			'**/*.cjs',
			'**/.storybook',
			'**/_templates',
			'**/build',
			'**/.DS_Store',
			'**/html',
		],
	},
	...fixupConfigRules(
		compat.extends(
			'plugin:@typescript-eslint/recommended',
			'plugin:react/recommended',
			'plugin:react-hooks/recommended',
			'plugin:jsx-a11y/recommended',
			'plugin:prettier/recommended'
		)
	),
	{
		plugins: {
			'@typescript-eslint': fixupPluginRules(typescriptEslint),
			react: fixupPluginRules(react),
			'jsx-a11y': fixupPluginRules(jsxA11Y),
			'simple-import-sort': simpleImportSort,
			prettier: fixupPluginRules(prettier),
		},

		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
			},

			parser: tsParser,
			ecmaVersion: 12,
			sourceType: 'module',
		},

		settings: {
			react: {
				version: 'detect',
			},
		},

		rules: {
			'react/react-in-jsx-scope': 'off',
			'jsx-a11y/anchor-is-valid': 'off',
		},
	},
	{
		files: ['**/*.ts', '**/*.tsx'],

		rules: {
			'react/prop-types': 'off',
			'@typescript-eslint/no-unused-vars': 'error',

			'@typescript-eslint/explicit-function-return-type': [
				'warn',
				{
					allowExpressions: true,
					allowConciseArrowFunctionExpressionsStartingWithVoid: true,
				},
			],

			'@typescript-eslint/ban-ts-comment': 'warn',
			'no-mixed-spaces-and-tabs': 'off',
			'react/display-name': 'off',
		},
	},
];
