// The SVG files should be camelCase.
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const assetsFolder = './assets';
const componentsFolder = './components';

const svgFiles = fs
	.readdirSync(assetsFolder)
	.filter(file => path.extname(file) === '.svg');

function updateIndexFile(componentName) {
	const indexPath = path.resolve('./index.ts');
	const exportStatement = `export { default as ${componentName} } from './components/${componentName}';\n`;

	if (!fs.existsSync(indexPath)) {
		fs.writeFileSync(indexPath, '');
	}

	const indexContent = fs.readFileSync(indexPath, 'utf-8');
	if (!indexContent.includes(exportStatement)) {
		fs.appendFileSync(indexPath, exportStatement);
	}
}

svgFiles.forEach(file => {
	const filePath = path.join(assetsFolder, file);
	const componentName = path.basename(file, '.svg');

	// Optimize the  file using SVGO.
	const optimizedSvgPath = path.join(
		assetsFolder,
		`${componentName}.optimized.svg`
	);
	execSync(`npx svgo ${filePath} -o ${optimizedSvgPath}`);

	const componentPath = path.join(componentsFolder, `${componentName}.tsx`);
	// Convert the optimized SVG to a React component using SVGR.
	execSync(
		`npx @svgr/cli --icon --jsx-runtime=automatic --typescript --out-dir ${componentsFolder} ${optimizedSvgPath}`
	);

	// Convert the .tsx files to the original SVG name.
	const defaultGeneratedName = path.join(
		componentsFolder,
		`${componentName}Optimized.tsx`
	);
	fs.renameSync(defaultGeneratedName, componentPath);

	updateIndexFile(componentName);

	// Deletes the temporarily generated SVGO files.
	fs.unlinkSync(optimizedSvgPath);
});
