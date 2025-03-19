import { cn } from '@sky-hub/tailwind/utilities';
import * as ButtonPrimitive from '@radix-ui/react-toggle';
import { Ref, forwardRef, JSX } from 'react';
import { buttonVariants, type ButtonVariantsProps } from './Button.styles';

/**
 * The ButtonVProps interface extends the ButtonPrimitive.PrimitiveButtonProps interface, the ButtonVariantProps interface
 * of buttonVariants object.
 */
interface ButtonProps
	extends ButtonPrimitive.PrimitiveButtonProps,
		ButtonVariantsProps {
	asChild?: boolean;
}
/**
 * A custom button component with multiple variants and sizes.
 *
 * @function Button
 * @param {ButtonProps} props - The props to be passed to the button component.
 * @returns {JSX.Element} - Returns the Button component as the JSX element.
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			className,
			variant = 'contain',
			size = 'md',
			children,
			...props
		}: ButtonProps,
		ref: Ref<HTMLButtonElement>
	): JSX.Element => {
		/**
		 * A utility function that applies the appropriate CSS classes based on the variant and size props
		 * using the clsx utility function.
		 *
		 * @function applyClasses
		 * @param {Object} classes - The CSS classes to apply.
		 * @returns {string} - The concatenated CSS classes.
		 */
		const applyClasses = (classes: { [key: string]: unknown }): string =>
			cn(buttonVariants({ variant, size, className }), classes);

		// Rendering the button component using ButtonPrimitive.Root component from @radix-ui/react-toggle library
		return (
			<ButtonPrimitive.Root
				role='button'
				className={applyClasses({})}
				{...props}
				ref={ref}
			>
				{children} hH sds asdsad
			</ButtonPrimitive.Root>
		);
	}
);

export { Button };
