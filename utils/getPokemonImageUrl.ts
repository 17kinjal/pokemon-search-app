const POKEMON_IMAGES_URL = 'https://img.pokemondb.net/artwork/large'

const pokemonImgUrl = (name: string) => {
	return `${POKEMON_IMAGES_URL}/${name}.jpg`;
}

export default pokemonImgUrl;
