import React from 'react';
import { QueryClient } from '@tanstack/react-query';
import { searchPokemon } from '@/lib/hooks/usePokemon';
import PokemonDetailsClient from '@/components/pages/PokemonDetails/PokemonDetailsClient';

export default async function PokemonDetails({
	params,
}: {
	params: Promise<{ slug: string }>
}) {
	const { slug } = await params
	const pokemonName = slug as string;
	const queryClient = new QueryClient();

	await queryClient.prefetchQuery({
		queryKey: ['pokemonName', pokemonName],
		queryFn: ({ queryKey }) => {
			const name = queryKey[1] as string;
			return searchPokemon(name);
		},
	});
	return (
		<PokemonDetailsClient pokemonName={pokemonName} />
	);
}