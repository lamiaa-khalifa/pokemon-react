import Card from './Card';
import { pokemons } from '../pokemonList';

const PokemonCards = () => {
  const pokemonList = pokemons.map(pokemon => <Card pokemon={pokemon} />)
  return (
    <div>
      {pokemonList}
    </div>
  );
}

export default PokemonCards;
