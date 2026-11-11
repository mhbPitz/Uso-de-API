import { useEffect, useState } from 'react';
import axios from 'axios';

export default function usePokemonApi() {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pokemonId, setPokemonId] = useState(560);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
        setPokemon(response.data);
      } catch (requestError) {
        setError(requestError);
        console.error('Erro ao buscar Pokémon:', requestError);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [pokemonId]);

  function roletarPokemon() {
    const novoId = Math.floor(Math.random() * (1025 + 1)); // Gera um número aleatório entre 0 e 1025
    setPokemonId(novoId);
  
  }

  return { pokemon, loading, error, roletarPokemon };
}
