import React, { FC } from 'react';
import Image from 'next/image';

interface Props {
	src: string;
	alt?: string;
	imageBpWidths: string[];
	className?: string; // For additional Tailwind classes
}

const ResponsiveImage: FC<Props> = ({ src, alt = '', imageBpWidths, className }) => {
	return (
		<div className={`relative w-full rounded-t-md bg-white text-center ${className || ''}`}>
			<Image
				src={src}
				alt={alt}
				priority
				fill
				sizes={imageBpWidths.join(', ')}
				className="object-contain bg-transparent p-4"
			/>
		</div>
	);
};

export default ResponsiveImage;