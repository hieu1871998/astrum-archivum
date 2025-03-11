import { defineConfig } from 'tsup';

const config = defineConfig({
	entry: ['src/zod/index.ts'],
	splitting: true,
	sourcemap: true,
	clean: true,
	dts: true,
	format: ['esm', 'cjs'],
});

export default config;
