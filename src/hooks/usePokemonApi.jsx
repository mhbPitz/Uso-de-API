import { useEffect, useState } from 'react';
import axios from 'axios';

export default function usePokemonApi() {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon/charizard');
        setPokemon(response.data);
      } catch (requestError) {
        setError(requestError);
        console.error('Erro ao buscar Pokémon:', requestError);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  return { pokemon, loading, error };
}
