import { cva, VariantProps } from 'class-variance-authority';

/**
 * The buttonVariants object using class-variance-authority (cva) library,
 * which contains CSS classes for various button variants.
 */
export const buttonVariants = cva(
	'inline-flex items-center justify-center rounded-md text-sm font-medium',
	{
		variants: {
			variant: {
				contain: [
					'bg-blue-500',
					'text-white',
					'border-transparent',
					'hover:bg-blue-600',
				],
				outline: [
					'bg-transparent',
					'hover:bg-blue-500 ',
					'text-blue-700',
					'hover:text-white ',
					'border border-blue-500',
					'hover:border-transparent ',
					'rounded',
				],
				link: ['underline-offset-4 ', 'hover:underline ', 'text-primary'],
			},
			size: {
				md: ['h-10 ', 'py-2 ', 'px-4'],
				sm: ['h-9 ', 'px-3 ', "rounded-md'"],
				lg: ['h-11 ', 'px-8 ', 'rounded-md'],
			},
		},
		defaultVariants: {
			variant: 'contain',
			size: 'md',
		},
	}
);

/**
 * The ButtonVariantsProps interface extends the VariantProps interface of buttonVariants object.
 */
export interface ButtonVariantsProps
	extends VariantProps<typeof buttonVariants> {}
