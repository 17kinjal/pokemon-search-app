'use client';
import React, { FC, useState } from 'react';
import Search from '../../UI/Search';
import Container from '../../UI/Container';
import PokemonTypeSelect from './PokemonTypeSelect';

interface Props {
	children?: React.ReactNode;
}

const HomeTemplate: FC<Props> = ({ children }) => {
	const [searchValue, setSearchValue] = useState<string>('');

	const handleSetSearchValue = (value: string) => {
		setSearchValue(value);
	};

	return (
		<Container>
			<PokemonTypeSelect />
			<Search
				setSearchQuery={handleSetSearchValue}
				searchQuery={searchValue}
			/>
			<main>{children}</main>
		</Container>
	);
};

export default HomeTemplate;
