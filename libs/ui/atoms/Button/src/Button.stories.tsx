import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ComponentProps } from 'react';
import { Button } from './Button';

type ButtonProps = ComponentProps<typeof Button>;

const meta: Meta<typeof Button> = {
	title: 'Components/Button',
	component: Button,
	argTypes: {
		variant: {
			control: { type: 'radio' },
			options: ['outline', 'contain', 'link'],
		},
		size: {
			control: { type: 'radio' },
			options: ['md', 'sm', 'lg'],
		},
	},
	args: {
		onClick: fn(),
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

const sizes: ButtonProps['size'][] = ['lg', 'sm', 'md'];

const variants: ButtonProps['variant'][] = ['contain', 'outline', 'link'];

export const Default: Story = {
	args: {
		children: 'Button',
	},
};

export const Sizes: StoryFn = () => (
	<div className='flex flex-wrap items-center gap-md'>
		{sizes.map(size => (
			<Button key={size} size={size}>
				Button {size}
			</Button>
		))}
	</div>
);

export const Variants: StoryFn = () => (
	<div className='flex flex-wrap items-center gap-md'>
		{variants.map(variant => (
			<Button key={variant} variant={variant}>
				Button {variant}
			</Button>
		))}
	</div>
);
