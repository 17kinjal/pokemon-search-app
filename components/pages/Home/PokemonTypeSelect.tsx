'use client'
import React, { useEffect, useMemo, useState } from "react";
import { SingleValue, ActionMeta } from 'react-select';
import { useRouter, useSearchParams } from "next/navigation";
import dynamic from 'next/dynamic';
const CustomSelect = dynamic(() => import('@/components/UI/Select'), {
	ssr: false,
});
import { Option } from "@/components/UI/Select/Select";
import { fetchPokemonTypeDetails, useFetchPokemonTypesWithInfinityScroll } from "@/lib/hooks/usePokemon";
import useStore from "@/store/useStore";
import mapListResults from '@/utils/mapPokemonResult';
import { Result, GenericItem, InfiniteQueryData } from "@/lib/types/pokemon";
import queryClient from '@/lib/queryClient';
import { capitalizeWord } from "@/utils";

const PokemonSelect = () => {
	const { setPokemonResults } = useStore();
	const {
		data,
		fetchNextPage,
		hasNextPage,
		isFetchingNextPage,
		isLoading,
	} = useFetchPokemonTypesWithInfinityScroll();
	const router = useRouter();
	const searchParams = useSearchParams();
	const [selectedType, setSelectedType] = useState<Option | null>(null);

	const options: Option[] = useMemo(() => {
		if (!data) return [];
		return (data as InfiniteQueryData).pages.flatMap((page) =>
			page.results.map((item: Result) => ({
				label: capitalizeWord(item.name || ''),
				value: item.name,
			}))
		);
	}, [data]);

	const handleMenuScrollToBottom = () => {
		if (hasNextPage && !isFetchingNextPage) {
			fetchNextPage();
		}
	};

	const handlePokemonTypeData = async () => {
		const params = new URLSearchParams(searchParams.toString());
		if (selectedType?.value) {
			params.set('type', selectedType.value);
			router.push(`?${params.toString()}`);
			const data = await fetchPokemonTypeDetails(selectedType.value)
			const pokemonResults: GenericItem[] = data?.pokemon?.length ? mapListResults(data.pokemon.map((p) => p.pokemon) as Result[]) : [];
			setPokemonResults(pokemonResults)
		} else {
			params.delete('type');
			router.push(`?${params.toString()}`);
		}
	}

	const handleSelect = (
		option: SingleValue<Option>,
		actionMeta: ActionMeta<Option>
	) => {
		setSelectedType(option)
		if (actionMeta.action === 'clear') {
			queryClient.removeQueries({ queryKey: ['pokemonList'] });
		}
	}

	useEffect(() => {
		handlePokemonTypeData()
	}, [selectedType])

	return (
		<CustomSelect
			options={options}
			isLoading={isLoading || isFetchingNextPage}
			onMenuScrollToBottom={handleMenuScrollToBottom}
			value={selectedType}
			onChange={(option, actionMeta) => handleSelect(option, actionMeta)}
			placeholder="Select Pokémon Type"
			isClearable
		/>
	);
};

export default PokemonSelect;
