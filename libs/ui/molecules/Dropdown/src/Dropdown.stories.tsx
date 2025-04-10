import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ComponentProps } from 'react';
import { Dropdown } from './Dropdown';

type DropdownProps = ComponentProps<typeof Dropdown>;

const meta: Meta<typeof Dropdown> = {
	title: 'Components/Dropdown',
	component: Dropdown,
	argTypes: {
		defaultValue: {
			control: 'text',
		},
		options: {
			control: 'object',
		},
		onValueChange: { action: 'value changed' },
	},
	args: {
		onValueChange: fn(),
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

const defaultOptions: DropdownProps['options'] = [
	{ id: '1', value: 'option1', textValue: 'Option 1' },
	{ id: '2', value: 'option2', textValue: 'Option 2' },
	{ id: '3', value: 'option3', textValue: 'Option 3' },
];

export const Default: Story = {
	args: {
		defaultValue: 'option1',
		options: defaultOptions,
	},
};

export const WithCustomOptions: StoryFn<DropdownProps> = args => (
	<Dropdown
		{...args}
		defaultValue='custom1'
		options={[
			{ id: '1', value: 'custom1', textValue: 'Custom Option 1' },
			{ id: '2', value: 'custom2', textValue: 'Custom Option 2' },
			{ id: '3', value: 'custom3', textValue: 'Custom Option 3' },
		]}
	/>
);

WithCustomOptions.args = {
	defaultValue: 'custom1',
	options: [
		{ id: '1', value: 'custom1', textValue: 'Custom Option 1' },
		{ id: '2', value: 'custom2', textValue: 'Custom Option 2' },
		{ id: '3', value: 'custom3', textValue: 'Custom Option 3' },
	],
};

export const WithDisabledOption: StoryFn<DropdownProps> = args => (
	<Dropdown
		{...args}
		defaultValue='option1'
		options={[
			{ id: '1', value: 'option1', textValue: 'Option 1' },
			{ id: '2', value: 'option2', textValue: 'Option 2' },
			{ id: '3', value: 'option3', textValue: 'Option 3', disabled: true },
		]}
	/>
);

WithDisabledOption.args = {
	defaultValue: 'option1',
	options: [
		{ id: '1', value: 'option1', textValue: 'Option 1' },
		{ id: '2', value: 'option2', textValue: 'Option 2' },
		{ id: '3', value: 'option3', textValue: 'Option 3', disabled: true },
	],
};
