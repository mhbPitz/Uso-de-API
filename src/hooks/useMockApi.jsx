import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useMockApi() {
  const [perfil, setPerfil] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('https://6a79e554674f43f4db11ebc8.mockapi.io/api/person/66');
        setPerfil(response.data);
      } catch (requestError) {
        setError(requestError);
        console.error('Erro ao buscar perfil:', requestError);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  return { perfil, loading, error };
}
