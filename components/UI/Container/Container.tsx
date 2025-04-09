import React from 'react';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
	padding?: 'p1' | 'p2' | 'p3' | 'p4';
	page?: 'template' | 'spinner';
}

const Container: React.FC<ContainerProps> = ({
	children,
	padding = 'p1',
	page = 'template',
	className,
	...props
}) => {
	const paddingClasses = {
		p1: 'p-2',
		p2: 'p-4',
		p3: 'p-6',
		p4: 'p-8',
	};

	const pageClasses = {
		template: 'max-w-[calc(1024px+var(--font-size-7))] min-h-[calc(100vh-56px-53px)] min-w-[300px]',
		spinner: 'max-w-full min-h-screen flex flex-col items-center justify-center',
	};

	return (
		<div
			className={`${paddingClasses[padding]} ${pageClasses[page]} mx-auto ${className || ''}`}
			{...props}
		>
			{children}
		</div>
	);
};

export default Container;