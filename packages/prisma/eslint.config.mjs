import { libraryConfig } from '@astranova/eslint-config/library';
import tseslint from 'typescript-eslint';

export default tseslint.config(
	...libraryConfig,
	{
		ignores: ['eslint.config.mjs'],
	},
	{
		languageOptions: {
			parserOptions: {
				projectService: true,
				tsconfigRootDir: import.meta.dirname,
			},
		},
	},
);
