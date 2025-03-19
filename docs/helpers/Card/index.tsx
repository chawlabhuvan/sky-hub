import React, { FC, useState } from 'react';

interface CardProps {
	href: string;
	title: string;
	description?: string;
	isExternalLink?: boolean;
}

export const Card: FC<CardProps> = ({
	href,
	title,
	description,
	isExternalLink = false,
}) => {
	const [isHovered, setIsHovered] = useState(false);
	const dynamicProps = isExternalLink
		? {
				target: '_blank',
				rel: 'noreferrer',
			}
		: {};

	return (
		<a
			href={href}
			{...dynamicProps}
			className='max-w w-100 bg-gradient relative h-28 w-64 transform cursor-pointer overflow-hidden rounded-xl p-4 text-lg font-bold text-white no-underline shadow-lg transition-transform hover:-translate-y-2 hover:underline'
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			{title}
			{description && (
				<div
					className={`duration-400 absolute bottom-0 ${
						isHovered ? 'opacity-100' : 'opacity-0'
					}`}
				>
					<p className='text-white'>{description}</p>
				</div>
			)}
		</a>
	);
};
