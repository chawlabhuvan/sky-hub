import { type JSX } from 'react';
import { Button } from '@sky-hub/button';
import { CheckIcon, ChevronDownIcon } from '@radix-ui/react-icons';
import * as DropdownPrimitive from '@radix-ui/react-select';
import { cx } from 'class-variance-authority';

/**
 * Defines the props that are passed to the Dropdown component.
 * @interface DropdownProps
 * @extends DropdownPrimitive.SelectProps
 * @property {(DropdownPrimitive.SelectItemProps & DropdownPrimitive.SelectItemTextProps)[]} [options] - The options to be displayed in the dropdown.
 */

interface DropdownProps extends DropdownPrimitive.SelectProps {
	options?: (DropdownPrimitive.SelectItemProps &
		DropdownPrimitive.SelectItemTextProps)[];
}
/**
 * The Dropdown component creates a dropdown menu that allows the user to select an option from a list.
 * @function Dropdown
 * @param {DropdownProps} props - The props passed to the Dropdown component.
 * @returns {JSX.Element} - Returns the Dropdown component as the JSX element.
 */
export function Dropdown({
	defaultValue,
	options,
	onValueChange,
}: DropdownProps): JSX.Element {
	return (
		<DropdownPrimitive.Root
			defaultValue={defaultValue}
			onValueChange={onValueChange}
		>
			<DropdownPrimitive.Trigger asChild aria-label='Food'>
				<Button>
					<DropdownPrimitive.Value />
					<DropdownPrimitive.Icon className='ml-2'>
						<ChevronDownIcon />
					</DropdownPrimitive.Icon>
				</Button>
			</DropdownPrimitive.Trigger>
			<DropdownPrimitive.Content>
				<DropdownPrimitive.Viewport className='rounded-lg bg-white p-2 shadow-lg dark:bg-gray-800'>
					<DropdownPrimitive.Group>
						{options?.map(option => (
							<DropdownPrimitive.Item
								disabled={option.disabled}
								key={option.id}
								value={option.value}
								className={cx(
									'relative flex items-center rounded-md px-8 py-2 text-sm font-medium text-gray-700 focus:bg-gray-100 dark:text-gray-300 dark:focus:bg-gray-900',
									'radix-disabled:opacity-50',
									'focus:outline-none'
								)}
							>
								<DropdownPrimitive.ItemText>
									{option.textValue}
								</DropdownPrimitive.ItemText>
								<DropdownPrimitive.ItemIndicator className='absolute left-2 inline-flex items-center'>
									<CheckIcon />
								</DropdownPrimitive.ItemIndicator>
							</DropdownPrimitive.Item>
						))}
					</DropdownPrimitive.Group>
				</DropdownPrimitive.Viewport>
			</DropdownPrimitive.Content>
		</DropdownPrimitive.Root>
	);
}
