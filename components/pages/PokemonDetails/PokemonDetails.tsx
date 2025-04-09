import { FC } from 'react';
import { PokemonData } from '@/lib/types/pokemon';
import ResponsiveImage from '../../UI/Image';

interface Props {
  pokemon: PokemonData;
}

const PokemonDetails: FC<Props> = ({ pokemon }) => {
  return (
    <div className="h-[600px] max-w-[400px] mx-auto bg-yellow-300 rounded-md flex flex-col items-start p-0">
      <div className="h-[300px] w-full">
        <ResponsiveImage
          src={pokemon.sprites?.other['official-artwork']?.front_default || ''}
          alt={`${pokemon.name} artwork`}
          imageBpWidths={['400px']}
          className="h-full w-full object-contain" 
        />
      </div>
      <ul className="p-4">
        <li className="py-1">
          <strong>Name:</strong>{' '}
          {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
        </li>
        <li className="py-1">
          <strong>Type:</strong>{' '}
          {pokemon.types.map((type) => type.type.name).join(', ')}
        </li>
        <li className="py-1">
          <strong>Stats:</strong>{' '}
          {pokemon.stats.map((stat) => stat.stat.name).join(', ')}
        </li>
        <li className="py-1">
          <strong>Abilities:</strong>{' '}
          {pokemon.abilities
            .slice(0, 5)
            .map((ability) => ability.ability.name)
            .join(', ')}
        </li>
        <li className="py-1">
          <strong>Some Moves:</strong>{' '}
          {pokemon.moves
            .slice(0, 5)
            .map((move) => move.move.name)
            .join(', ')}
        </li>
      </ul>
    </div>
  );
};

export default PokemonDetails;