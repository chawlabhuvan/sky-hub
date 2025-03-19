import { cva, VariantProps } from 'class-variance-authority';
import React, { PropsWithChildren } from 'react';

const styles = cva(['rounded-md p-4 text-sm'], {
	variants: {
		marginY: {
			small: 'my-2',
			medium: 'my-4',
			large: 'my-8',
		},
		marginTop: {
			small: 'mt-2',
			medium: 'mt-4',
			large: 'mt-8',
		},
		marginBottom: {
			small: 'mb-2',
			medium: 'mb-4',
			large: 'mb-8',
		},
		kind: {
			success: ['bg-green-100 text-green-900'],
			error: ['bg-red-100 text-red-900'],
			warning: ['bg-yellow-100 text-yellow-900'],
			info: ['bg-blue-100 text-blue-900'],
		},
	},
	defaultVariants: {
		kind: 'info' as const,
	},
});

type ExcludeNull<T> = {
	[K in keyof T]: Exclude<T[K], null>;
};

export type StylesProps = ExcludeNull<VariantProps<typeof styles>>;

const emojiLookup: Record<NonNullable<StylesProps['kind']>, string> = {
	info: 'ℹ️',
	error: '🚨',
	success: '✅',
	warning: '⚠️',
};

export function Callout({
	children,
	kind = 'info',
	...variants
}: PropsWithChildren<StylesProps>) {
	return (
		<div className={styles({ kind, ...variants })}>
			<div className='flex items-center'>
				<div className='pr-2 text-2xl'>{emojiLookup[kind]}</div>
				<div className='ml-2 text-base'>{children}</div>
			</div>
		</div>
	);
}
