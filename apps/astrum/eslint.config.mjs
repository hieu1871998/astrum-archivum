import { nextConfig } from '@astranova/eslint-config/next';

/** @type {import("eslint").Linter.Config[]} */
export default [
	{
		ignores: ['**/node_modules/**', '**/dist/**', 'eslint.config.mjs'],
	},
	...nextConfig,
];
