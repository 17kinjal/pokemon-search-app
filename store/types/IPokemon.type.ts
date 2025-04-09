import { PokemonList, GenericItem } from '@/lib/types/pokemon';

interface IPokemon {
  data: {
    pageParams: unknown[]; // or type this more strictly if you know it
    pages: PokemonList[];
  } | null;
  setData: (data: { pageParams: unknown[]; pages: PokemonList[] }) => void;
  setPokemonResults: (newResults: GenericItem[]) => void;
}

export default IPokemon;
