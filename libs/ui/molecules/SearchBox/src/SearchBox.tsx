import * as React from 'react';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { cx } from 'class-variance-authority';
import { Button } from '@sky-hub/button';

/**
 * SearchBoxProps interface for defining props for the SearchBox component
 * @interface
 * @property {string} className - An optional prop for adding additional CSS classes
 * @property {string} placeholder - An optional prop that sets the placeholder text for the search input
 * @property {function} onSearch - A function that is called when the search button is clicked, and it passes the search query as an argument.
 */
interface SearchBoxProps {
	className?: string;
	placeholder?: string;
	onSearch?: (query: string) => void;
}

/**
 * SearchBoxState interface for defining state for the SearchBox component
 * @interface
 * @property {string} query - A string representing the current search query
 */
interface SearchBoxState {
	query: string;
}

/**
A default search function that logs the search query to the console
@param {string} query - The search query to be logged to the console
*/
const defaultSearch = (query: string) => {
	console.log(`Performing search for "${query}"`);
};

/**
 * SearchBox component for creating a search box with a search button
 * @param {SearchBoxProps} props - Props for the SearchBox component
 * @returns {JSX.Element} - Returns the SearchBox component as the JSX element
 */
export function SearchBox({
	className,
	placeholder = 'Search',
	onSearch = defaultSearch,
}: SearchBoxProps): React.JSX.Element {
	const [state, setState] = React.useState<SearchBoxState>({ query: '' });

	/**
	 * Handles the change event of the input element and sets the query state
	 * @param {React.ChangeEvent<HTMLInputElement>} event - The change event of the input element
	 */
	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setState({ ...state, query: event.target.value });
	};

	/**
	 * Handles the form submission event and calls the onSearch callback function with the search query
	 * @param {React.FormEvent<HTMLFormElement>} event - The form submission event
	 */
	const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (onSearch) {
			onSearch(state.query);
		}
	};

	return (
		<form
			onSubmit={handleSearch}
			className={cx(
				'flex items-center rounded-md border border-gray-300',
				className
			)}
		>
			<input
				type='text'
				value={state.query}
				onChange={handleInputChange}
				placeholder={placeholder}
				className='flex-grow px-4 py-2 focus:border-blue-500 focus:outline-none'
			/>
			<Button
				type='submit'
				variant='contain'
				className='rounded-r-md border-l-0'
			>
				<MagnifyingGlassIcon className='h-5 w-5' />
			</Button>
		</form>
	);
}
