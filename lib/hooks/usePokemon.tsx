import api from "../apis/pokemon";
import { PokemonData, PokemonList, Result, PokemonTypeList, PokemonType } from "../types/pokemon";

import mapListResults from '@/utils/mapPokemonResult';
import { useInfiniteQuery } from '@tanstack/react-query';

const FETCH_LIMIT = 20;

const fetchPokemon = async ({ pageParam }: { pageParam: string | undefined }) => {
	const offset = pageParam || '0';
	const { data } = await api.get<PokemonList>(
		`/pokemon?limit=${FETCH_LIMIT}&offset=${offset}`
	);
	data.results = mapListResults(data.results as Result[]);
	return data;
};

export const searchPokemon = async (query: string) => {
	const { data } = await api.get<PokemonData>(`/pokemon/${query}/`);
	return data;
};

const fetchPokemonTypes = async ({ pageParam }: { pageParam: string | undefined }) => {
	const offset = pageParam || '0';
	const { data } = await api.get<PokemonTypeList>(
		`/type?limit=5&offset=${offset}`
	);
	return data;
};

export const useFetchPokemonWithInfinityScroll = () => {
	return useInfiniteQuery({
		queryKey: ['pokemonList'],
		queryFn: fetchPokemon,
		initialPageParam: '0',
		getNextPageParam: (lastPage: PokemonList) => {
			if (lastPage.next) {
				const url = new URL(lastPage.next);
				return url.searchParams.get('offset');
			}
			return undefined;
		},
	});
};

export const useFetchPokemonTypesWithInfinityScroll = () => {
	return useInfiniteQuery({
		queryKey: ['pokemonTypes'],
		queryFn: fetchPokemonTypes,
		initialPageParam: '0',
		getNextPageParam: (lastPage: PokemonTypeList) => {
			if (lastPage.next) {
				const url = new URL(lastPage.next);
				return url.searchParams.get('offset');
			}
			return undefined;
		},
		select: (data) => ({
			...data,
			pages: data.pages.map(page => ({
				results: page.results.map(item => ({
					name: item.name,
					url: item.url.toString(),
				})),
			})),
		}),
	});
};

export const fetchPokemonTypeDetails = async (type: string) => {
	const { data } = await api.get<PokemonType>(
		`/type/${type}`
	);
	return data;
};