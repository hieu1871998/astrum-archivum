import globals from 'globals';
import { config as baseConfig } from './base.js';

/** @type {import('eslint').Linter.Config} */
export const libraryConfig = [
	...baseConfig,
	{
		languageOptions: {
			globals: {
				...globals.node,
			},
			ecmaVersion: 5,
			sourceType: 'module',
			parserOptions: {
				projectService: true,
				tsconfigRootDir: import.meta.dirname,
			},
		},
	},
	{
		rules: {
			'@typescript-eslint/no-floating-promises': 'warn',
			'@typescript-eslint/no-unsafe-argument': 'warn',
		},
	},
];
