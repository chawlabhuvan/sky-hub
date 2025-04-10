import fs from 'fs';
import path from 'path';

const componentsFolder = './components';
const distFolder = './dist';
const packageJsonPath = './package.json';

// Read the generated TSX components
const tsxFiles = fs
	.readdirSync(componentsFolder)
	.filter(file => path.extname(file) === '.tsx');

// Read package.json
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));

// Ensure exports object exists
packageJson.exports = packageJson.exports || {};

// Update exports property
tsxFiles.forEach(file => {
	const componentName = path.basename(file, '.tsx');

	packageJson.exports[`./${componentName}`] = {
		import: {
			types: `${distFolder}/${componentName}.d.ts`,
			default: `${distFolder}/${componentName}.js`,
		},
		require: {
			types: `${distFolder}/${componentName}.d.cts`,
			default: `${distFolder}/${componentName}.cjs`,
		},
	};
});

// Write back to package.json
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
