import List from '@/components/UI/List';
import { PokemonList } from '@/lib/types/pokemon';
import {
	IMG_ALT_KEY,
	IMG_URL_KEY,
	LINK_PATH_KEY,
} from '@/utils/mapPokemonResult';
import { InfiniteData } from '@tanstack/react-query';
import { FC } from 'react';

interface Props {
	pokemonList: InfiniteData<PokemonList> | null;
}

const HomePage: FC<Props> = ({ pokemonList }) => {
	return (
		<List
			list={pokemonList}
			titleKey="name"
			imgSrcKey={IMG_URL_KEY}
			imgAltKey={IMG_ALT_KEY}
			linkPathKey={LINK_PATH_KEY}
		/>
	);
};

export default HomePage;
