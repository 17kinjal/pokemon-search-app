'use client';
import { useSearchParams } from 'next/navigation';
import { FetchNextPageOptions, InfiniteData, InfiniteQueryObserverResult } from '@tanstack/react-query';
import { useEffect } from 'react';
import { PokemonList } from '@/lib/types/pokemon';

const useFetchNextPage = (
	hasNextPage: boolean | undefined,
	callBack: (
		options?: FetchNextPageOptions
	) => Promise<InfiniteQueryObserverResult<InfiniteData<PokemonList, unknown>, unknown>>
) => {
	const searchParams = useSearchParams();
	const type = searchParams.get('type');

	useEffect(() => {
		let fetching = false;

		const handleScroll = async () => {
			const scrollingElement = document.scrollingElement;

			if (scrollingElement) {
				const { scrollHeight, scrollTop, clientHeight } = scrollingElement;

				if (!fetching && scrollHeight - scrollTop <= clientHeight * 1.2) {
					fetching = true;
					if (hasNextPage && !type) {
						await callBack();
					}
					fetching = false;
				}
			}
		};

		document.addEventListener('scroll', handleScroll);
		return () => {
			document.removeEventListener('scroll', handleScroll);
		};
	}, [callBack, hasNextPage, type]);
};

export default useFetchNextPage;
