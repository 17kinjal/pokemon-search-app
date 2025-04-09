'use client';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { PokemonData } from '@/lib/types/pokemon';
import { searchPokemon } from '@/lib/hooks/usePokemon';
import Container from '@/components/UI/Container';
import Loader from '@/components/UI/Loader';
import PokemonDetails from './PokemonDetails';

interface PokemonDetailsClientProps {
	pokemonName: string;
}

const PokemonDetailsClient: React.FC<PokemonDetailsClientProps> = ({
	pokemonName,
}) => {
	const {
		data: pokemonDetails,
		isLoading,
		isError,
	} = useQuery<PokemonData, Error>({
		queryKey: ['searchPokemon', pokemonName],
		queryFn: () => {
			return searchPokemon(pokemonName);
		},
	});
	if (isLoading) {
		return (
			<Container page="spinner">
				<Loader loading={true} />
			</Container>
		);
	}

	if (isError) {
		return (
			<Container page="spinner">
				<Link href={'/'}>
					<p
						className="text-seafoamDark mt-4 mb-8" // Using Tailwind classes
					>
						<strong>&lt; Back</strong>
					</p>
				</Link>
				<h1>We couldn&apos;t find your pokemon </h1>
				<div className="text-center mx-auto" role="img" aria-label="sad">
					😢
				</div>
			</Container>
		);
	}

	if (pokemonDetails) {
		return <PokemonDetails pokemon={pokemonDetails} />;
	}

	return <></>;
};
export default PokemonDetailsClient;