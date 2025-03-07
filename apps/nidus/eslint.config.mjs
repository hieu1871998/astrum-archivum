import { nestConfig } from '@astranova/eslint-config/nest';
import tseslint from 'typescript-eslint';

export default tseslint.config(
	{
		ignores: ['eslint.config.mjs'],
	},
	...nestConfig,
);
