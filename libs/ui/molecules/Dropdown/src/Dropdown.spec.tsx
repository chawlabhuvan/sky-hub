import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Dropdown } from './Dropdown';

const defaultOptions = [
	{ id: '1', value: 'option1', textValue: 'Option 1' },
	{ id: '2', value: 'option2', textValue: 'Option 2' },
	{ id: '3', value: 'option3', textValue: 'Option 3', disabled: true },
];

describe('Dropdown Component', () => {
	it('renders without crashing', () => {
		render(<Dropdown defaultValue='option1' options={defaultOptions} />);
		expect(screen.getByText('Option 1')).toBeInTheDocument();
	});

	it('displays all options when clicked', async () => {
		render(<Dropdown defaultValue='option1' options={defaultOptions} />);
		await userEvent.click(screen.getByRole('combobox'));

		expect(await screen.findByText('Option 1')).toBeInTheDocument();
		expect(await screen.findByText('Option 2')).toBeInTheDocument();
		expect(await screen.findByText('Option 3')).toBeInTheDocument();
	});

	it('calls onValueChange when an option is selected', async () => {
		const handleChange = vi.fn();
		render(
			<Dropdown
				defaultValue='option1'
				options={defaultOptions}
				onValueChange={handleChange}
			/>
		);

		await userEvent.click(screen.getByRole('combobox'));
		await userEvent.click(await screen.findByText('Option 2'));

		await waitFor(() => {
			expect(handleChange).toHaveBeenCalledWith('option2');
		});
	});
});
