'use client';

import { QueryClientProvider, dehydrate, HydrationBoundary } from '@tanstack/react-query';
import React, { useState } from 'react';
import queryClientInstance from '../queryClient'
interface Props {
	children: React.ReactNode;
}

const dehydratedState = dehydrate(queryClientInstance)

const QueryProvider: React.FC<Props> = ({ children }) => {
	const [queryClient] = useState(queryClientInstance);
	return (
		<QueryClientProvider client={queryClient}>
			<HydrationBoundary state={dehydratedState}>
				{children}
			</HydrationBoundary>
		</QueryClientProvider>
	);
};

export default QueryProvider;