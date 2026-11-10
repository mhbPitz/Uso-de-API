import { useEffect, useState } from 'react';
import axios from 'axios';

const API_KEY = '67252d61';

export default function useOmdbApi() {
  const [filme, setFilme] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://www.omdbapi.com/?t=borderlands&apikey=${API_KEY}`,
        );
        setFilme(response.data);
      } catch (requestError) {
        setError(requestError);
        console.error('Erro ao buscar filme:', requestError);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  return { filme, loading, error };
}
