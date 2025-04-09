const getPokemonIdFromUrl = (url: string) => {
  const match = url.match(/\/pokemon\/(\d+)\//);
  return match ? match[1] : null;
};

export default function usePokemonImage(url: string): string | null {
  const id = getPokemonIdFromUrl(url);
  return id
    ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
    : null;
}
