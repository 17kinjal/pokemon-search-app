import React, { Suspense } from 'react';
import HomeTemplate from '@/components/pages/Home/HomeTemplate';
import PokemonDataFetcher from '@/components/pages/Home/HomeClient';
import Loader from '@/components/UI/Loader';

export default async function IndexPage() {
  return (
    <Suspense fallback={<Loader loading={true} />}>
      <HomeTemplate>
        <PokemonDataFetcher />
      </HomeTemplate>
    </Suspense>
  );
}