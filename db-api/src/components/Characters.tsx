import React from 'react';
import useCharacters from '../services/db';

const Characters = () => {
  const { data, loading, error } = useCharacters();

  if (loading) return <p>Cargando personajes...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                      <th scope="col" className="px-6 py-3">IMAGE</th>
                      <th scope="col" className="px-6 py-3">NAME</th>
                      <th scope="col" className="px-6 py-3">KI</th>
                      <th scope="col" className="px-6 py-3">MAX-KI</th>
                      <th scope="col" className="px-6 py-3">RACE</th>
                      <th scope="col" className="px-6 py-3">GENDER</th>
                      <th scope="col" className="px-6 py-3">DESCRIPTION</th>
                      <th scope="col" className="px-6 py-3">AFFILIATION</th>
                  </tr>
              </thead>
              <tbody>
              {data?.items?.map((character) => (
                <tr key={character.id} className="bg-white dark:bg-gray-800">
                  <td className="px-6 py-4"><img src={character.image} alt="" /></td>
                  <td className="px-6 py-4">{character.name}</td>
                  <td className="px-6 py-4">{character.ki}</td>
                  <td className="px-6 py-4">{character.maxKi}</td>
                  <td className="px-6 py-4">{character.race}</td>
                  <td className="px-6 py-4">{character.gender}</td>
                  <td className="px-6 py-4">{character.description}</td>
                  <td className="px-6 py-4">{character.affiliation}</td>
                </tr>
              ))}
              </tbody>
          </table>
      </div>
    </div>
  );
};

export default Characters;
