import React, { FC } from 'react';
import Link from 'next/link';
import queryClient from '@/lib/queryClient';

interface Props {
	title: string;
	linkText: string;
	linkPath: string;
	description?: string;
	className?: string;
}

const CardBody: FC<Props> = ({ title, description, linkText, linkPath, className }) => {
	return (
		<div className={`w-full flex flex-col justify-between items-start p-6 gap-5 bg-gray-50 rounded-b-md flex-none order-1 flex-grow-2 ${className || ''}`}>
			<div>
				<h1 className="text-lg font-bold text-blue-gray-800">
					{title}
				</h1>
				{description && <p>{description}</p>}
			</div>
			<div className="flex items-end">
				<p
					className={`text-${queryClient.getQueryData(['searchPokemon', title.toLowerCase()])
						? 'blue-gray-900'
						: 'blue-gray-500'
						} text-sm`}
				>
					<Link href={linkPath || ''} className="text-sky-500 mt-2 underline text-sm">{linkText}</Link>
				</p>
			</div>
		</div>
	);
};

export default CardBody;