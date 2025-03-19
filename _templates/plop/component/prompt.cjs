module.exports = [
	{
		type: 'input',
		name: 'componentName',
		default: 'Button',
		message: 'What is your component going to be called?',
	},
	{
		type: 'select',
		name: 'component',
		initial: 'atoms',
		message: 'Where do you want to copy the template?',
		choices: ['atoms', 'molecules', 'organisms', 'templates', 'pages'],
	},
];
