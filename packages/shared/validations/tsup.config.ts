import { defineConfig } from 'tsup';

const config = defineConfig({
	entry: ['src/index.ts'],
	splitting: true,
	sourcemap: true,
	dts: true,
	format: ['esm', 'cjs'],
});

export default config;
