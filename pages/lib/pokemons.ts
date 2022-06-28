export function getAllPokemons() {
  const pokemons = [{ name: 'Unknonw', type: 'Unknonw' }, { name: 'Charmander', type: 'Fire' }, { name: 'Pikachu', type: 'Thunder' }];
  return pokemons.map((pokemon) => {
    return {
      params: {
        pokemon: pokemon.name
      }
    }
  });
}

export function getPokemon(name: string): { name: string, type: string } {
  const pokemons = [{ name: 'Unknonw', type: 'Unknonw' }, { name: 'Charmander', type: 'Fire' }, { name: 'Pikachu', type: 'Thunder' }];
  const list = pokemons.filter((pokemon => pokemon.name == name));
  if (list.length > 0) {
    return list[0];
  }
  return pokemons[0];
}

