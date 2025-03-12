import gvseslint from '@glasshouse/style-guide/eslint';
import globals from 'globals';
import { config as baseConfig } from './base.js';

/**
 * A custom ESLint configuration for libraries that use Node.js.
 *
 * @type {import("eslint").Linter.Config[]}
 * */
export const nestConfig = [
	...baseConfig,
	...gvseslint.configs.flat.node,
	{
		languageOptions: {
			globals: {
				...globals.node,
				...globals.jest,
			},
			ecmaVersion: 'latest',
			sourceType: 'module',
			parserOptions: {
				projectService: true,
				tsconfigRootDir: import.meta.dirname,
			},
		},
		settings: {
			'import/resolver': {
				typescript: true,
				node: true,
			},
		},
	},
	{
		rules: {
			'@typescript-eslint/no-explicit-any': 'off',
			'@typescript-eslint/no-floating-promises': 'warn',
			'@typescript-eslint/no-unsafe-argument': 'warn',
			'@typescript-eslint/no-extraneous-class': 'off',
		},
	},
];
