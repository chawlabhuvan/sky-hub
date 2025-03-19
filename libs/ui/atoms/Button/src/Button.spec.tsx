import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { Button } from './Button';

describe('Button', () => {
	it('renders with children', () => {
		render(<Button>Click me!</Button>);
		expect(screen.getByText('Click me!')).toBeInTheDocument();
	});

	it('calls onClick handler when clicked', async () => {
		const handleClick = vi.fn();
		render(<Button onClick={handleClick}>Click me!</Button>);
		const button = screen.getByRole('button');
		await userEvent.click(button);
		expect(handleClick).toHaveBeenCalled();
	});

	it('renders with default variant and size', () => {
		render(<Button>Click me!</Button>);
		const button = screen.getByRole('button');
		expect(button).toHaveClass(
			'inline-flex items-center justify-center rounded-md text-sm font-medium bg-blue-500 text-white border-transparent hover:bg-blue-600 h-10 py-2 px-4'
		);
	});

	it('renders with custom variant and size', () => {
		render(
			<Button variant='outline' size='lg'>
				Click me!
			</Button>
		);
		const button = screen.getByRole('button');
		expect(button).toHaveClass(
			'inline-flex items-center justify-center text-sm font-medium bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white border border-blue-500 hover:border-transparent h-11 px-8 rounded-md'
		);
	});
});
