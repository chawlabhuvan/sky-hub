import React from 'react';
import { withThemeByDataAttribute } from '@storybook/addon-themes';
import { DocsContainer, DocsContainerProps } from '@storybook/blocks';
import '@sky-hub/tailwind/styles/tailwind.css';

interface ExampleContainerProps extends DocsContainerProps {
	children: React.ReactNode;
}

const ExampleContainer = ({ children, ...props }: ExampleContainerProps) => {
	return (
		<DocsContainer {...props}>
			<div id='doc-container'>{children}</div>
		</DocsContainer>
	);
};

export const parameters = {
	docs: {
		container: ExampleContainer,
	},
	options: {
		storySort: {
			order: ['Getting Started', 'Using GenesisX UI', 'Components', '*'],
		},
	},
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};

export const decorators = [
	withThemeByDataAttribute({
		themes: {
			light: 'light',
			dark: 'dark',
		},
		defaultTheme: 'light',
		attributeName: 'data-mode',
	}),
	(storyFn, { id, viewMode }) => {
		return (
			<div className='relative w-full'>
				{viewMode === 'docs' && (
					<div className='absolute -right-lg -top-xl'>
						<a
							href={`/iframe.html?&id=${id}`}
							target='_blank'
							rel='noreferrer'
						></a>
					</div>
				)}
				{storyFn()}
			</div>
		);
	},
];
export const tags = ['autodocs'];
