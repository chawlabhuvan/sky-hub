import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { SearchBox } from './SearchBox';

describe('SearchBox', () => {
	it('should render a search input box and a search button', () => {
		const { getByPlaceholderText, getByRole } = render(<SearchBox />);
		const input = getByPlaceholderText('Search');
		const button = getByRole('button');
		expect(input).toBeInTheDocument();
		expect(button).toBeInTheDocument();
	});

	it('should call onSearch function with search query when the search button is clicked', () => {
		const mockOnSearch = vi.fn();
		const { getByRole } = render(<SearchBox onSearch={mockOnSearch} />);
		const button = getByRole('button');
		fireEvent.click(button);
		expect(mockOnSearch).toHaveBeenCalledTimes(1);
		expect(mockOnSearch).toHaveBeenCalledWith('');
	});

	it('should update search query state when text is entered into the search input box', () => {
		const { getByPlaceholderText } = render(<SearchBox />);
		const input = getByPlaceholderText('Search');
		fireEvent.change(input, { target: { value: 'Test search query' } });
		expect(input).toHaveValue('Test search query');
	});
});
