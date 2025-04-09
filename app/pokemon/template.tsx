import React, { FC } from 'react';
import Container from '@/components/UI/Container';
import Link from 'next/link';

interface Props {
	children?: React.ReactNode;
}

const DetailsTemplate: FC<Props> = ({
	children,
}) => {
	return (
		<Container padding={'p4'}>
			<Link href={'/'}>
				<p>
					<strong>Back</strong>
				</p>
			</Link>
			<main>{children}</main>
		</Container>
	);
};

export default DetailsTemplate;
