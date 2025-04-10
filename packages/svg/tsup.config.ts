import { glob } from 'glob';
import { basename } from 'path';
import { defineConfig } from 'tsup';
import { config } from '@sky-hub/tsup';

const svgrComponents = glob.sync('./components/*.tsx');

const entries = svgrComponents.reduce(
	(acc: { [key: string]: string }, componentPath) => {
		const componentName = basename(componentPath, '.tsx');
		acc[componentName] = componentPath;
		return acc;
	},
	{}
);

export default defineConfig({
	entry: { ...entries },
	...config,
});
