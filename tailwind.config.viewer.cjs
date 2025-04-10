const fs = require('fs');
const path = require('path');

module.exports = function extractDesignSystemVariables() {
	const tokens = {};
	const regex = /--[^:\s]+:\s[^;]+;/g;
	let match;
	while (
		(match = regex.exec(
			fs.readFileSync(
				path.join(__dirname, 'packages/tailwind/styles/tailwind.css'),
				'utf8'
			)
		)) !== null
	) {
		const [declaration] = match;
		const [key, value] = declaration.split(/:\s/);
		tokens[`var(${key.trim()})`] = value.trim().slice(0, -1);
	}
	return tokens;
};
