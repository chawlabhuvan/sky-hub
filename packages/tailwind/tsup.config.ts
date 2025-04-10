import { defineConfig } from 'tsup';
import { config } from '@sky-hub/tsup';

export default defineConfig({
	...config,
	entry: {
		themes: 'themes/index.ts',
		utilities: 'utilities/index.ts',
		config: 'config/index.ts',
	},
});
