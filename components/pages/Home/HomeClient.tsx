'use client';

import { useSearchParams } from 'next/navigation';
import React, { FC, useEffect } from 'react';
import { useFetchPokemonWithInfinityScroll } from '@/lib/hooks/usePokemon';
import HomePage from '@/components/pages/Home';
import Loader from '@/components/UI/Loader';
import useFetchNextPage from '@/lib/hooks/useFetchNextPage';
import useStore from '@/store/useStore';
import Container from '@/components/UI/Container';

const PokemonDataFetcher: FC = () => {
  const searchParams = useSearchParams();
  const type = searchParams.get('type');
  const { setData } = useStore();
  const _data = useStore((state) => state.data);
  const { data, isSuccess, hasNextPage, fetchNextPage, isLoading, isError } =
    useFetchPokemonWithInfinityScroll();

  useFetchNextPage(hasNextPage, fetchNextPage);

  useEffect(() => {
    if (data && !type) {
      setData(data);
    }
  }, [data, type, setData]); // Include setData in dependency array

  if (isLoading || isError || !_data) {
    return (
      <Container page="spinner">
        <Loader loading={isLoading} />
      </Container>
    );
  }

  if (isSuccess && _data) {
    return <HomePage pokemonList={_data || null} />;
  }

  return <></>;
};

export default PokemonDataFetcher;