const { spawn } = require('child_process');
const util = require('util');

const spawnPromise = util.promisify(spawn);

module.exports = {
	prompt: async ({ prompter, args }) => {
		const userInputs = await prompter.prompt([
			{
				type: 'select',
				name: 'plop',
				initial: 'component',
				message: 'What do you want to generate today?',
				choices: [
					{ name: 'component', message: 'A new component' },
					{ name: 'package', message: 'A new package' },
				], // add more based on your requirement
			},
		]);

		await spawnPromise(`npx hygen plop ${userInputs.plop}`, {
			stdio: 'inherit',
			shell: true,
			cwd: process.cwd(),
		});

		return userInputs;
	},
};
