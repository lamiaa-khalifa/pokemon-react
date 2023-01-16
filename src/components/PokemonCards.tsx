import React from 'react';
import Card from './Card';
import { pokemons } from '../pokemonList';

const PokemonCards = () => {
  const pokemonList = pokemons.map(pokemon => <Card name={pokemon.name} type={pokemon.type} image={pokemon.image} />)
  return (
    <div>
      {pokemonList}
    </div>
  );
}

export default PokemonCards;
