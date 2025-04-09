import { GenericItem } from '@/lib/types/pokemon';
import { StateCreator } from 'zustand';
import IPokemon from '../types/IPokemon.type';

const createPokemonSlice: StateCreator<IPokemon> = (set, get) => ({
  data: null,
  setData: (data) => set({ data }),
  setPokemonResults: (newResults: GenericItem[]) =>
    set((state) => {
      if (!state.data) return {}; // guard for null

      const newPages = [...state.data.pages];
      newPages[0].results = newResults;

      return {
        data: {
          ...state.data,
          pages: newPages,
        },
      };
    }),
});

export default createPokemonSlice;
