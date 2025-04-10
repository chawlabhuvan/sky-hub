import { configDefaults, defineConfig } from 'vitest/config';

// Organized coverage excludes with clear categorization
const coverageExcludes = [
	...configDefaults.exclude,

	// Build outputs and dependencies
	'dist',
	'build',
	'node_modules',

	// Tool and utility directories
	'_templates',
	'tools',
	'packages/tailwind',
	'packages/svg',
	'apps/docs',
	'html',

	// Documentation and component stories
	'.storybook',
	'**/*.stories.tsx',
];

export default defineConfig({
	test: {
		environment: 'jsdom',
		globals: true,
		setupFiles: ['./config/vitest.setup.ts'],

		// Enhanced test timeout for complex tests
		testTimeout: 10000,

		// Improved performance for large test suites
		pool: 'threads',
		poolOptions: {
			threads: {
				singleThread: false,
			},
		},

		// Better test failure reporting
		reporters: ['default', 'html'],

		coverage: {
			provider: 'v8', // Modern coverage provider
			reporter: ['text', 'json', 'html'],
			exclude: coverageExcludes,
			thresholds: {
				statements: 75.0,
				functions: 75.0,
				branches: 75.0,
				lines: 75.0,
			},
			// Report uncovered lines in output
			reportOnFailure: true,
		},
	},

	resolve: {
		alias: {
			// add aliases here...
		},
	},
});
