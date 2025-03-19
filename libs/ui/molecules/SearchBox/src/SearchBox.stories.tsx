import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ComponentProps } from 'react';
import { SearchBox } from './SearchBox';

type SearchBoxProps = ComponentProps<typeof SearchBox>;

const meta: Meta<typeof SearchBox> = {
	title: 'Components/SearchBox',
	component: SearchBox,
	argTypes: {
		className: {
			control: 'text',
		},
		placeholder: {
			control: 'text',
		},
		onSearch: {
			action: 'searched',
		},
	},
	args: {
		onSearch: fn(),
	},
};

export default meta;
type Story = StoryObj<SearchBoxProps>;

export const Default: Story = {
	args: {
		placeholder: 'Search',
	},
};

export const CustomPlaceholder: StoryFn<SearchBoxProps> = args => (
	<SearchBox {...args} placeholder='Type to search...' />
);

CustomPlaceholder.args = {
	placeholder: 'Type to search...',
};

export const WithCustomClassName: StoryFn<SearchBoxProps> = args => (
	<SearchBox {...args} className='border-blue-500' />
);

WithCustomClassName.args = {
	className: 'border-blue-500',
};
