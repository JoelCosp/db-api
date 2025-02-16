import { useState, useEffect } from 'react';

// Define la estructura esperada de los personajes
interface Character {
    id: number;
    name: string;
    ki: number;
    maxKi: number;
    race: string;
    gender: string;
    description: string;
    image: string;
    affiliation: string;
}

// Define la estructura esperada de la respuesta de la API
interface ApiResponse {
  items: Character[]; // Esto asume que la API devuelve un objeto con una propiedad "items"
}

const useCharacters = () => {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dragonball-api.com/api/characters');

        if (!response.ok) {
          throw new Error('Error en la respuesta de la API');
        }

        const result: ApiResponse = await response.json(); // Especificamos el tipo esperado
        setData(result);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

export default useCharacters;
