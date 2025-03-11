import eslint from '@eslint/js';
import gvseslint from '@glasshouse/style-guide/eslint';
import eslintConfigPrettier from 'eslint-config-prettier';
import turboPlugin from 'eslint-plugin-turbo';

/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config}
 * */
export const config = [
	eslint.configs.recommended,
	eslintConfigPrettier,
	...gvseslint.configs.flat.typescript,
	{
		plugins: {
			turbo: turboPlugin,
		},
		rules: {
			'turbo/no-undeclared-env-vars': 'warn',
		},
	},
	{
		ignores: ['dist/**'],
	},
];
