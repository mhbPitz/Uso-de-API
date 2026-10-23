import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useDbzApi() {
  const [dbz, setDbz] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('https://dragonball-api.com/api/characters/43');
        setDbz(response.data);
      } catch (requestError) {
        setError(requestError);
        console.error('Erro ao buscar personagem de Dragon Ball:', requestError);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  return { dbz, loading, error };
}
