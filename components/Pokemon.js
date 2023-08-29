import React from "react";
import Image from 'next/image'

const Pokemon = ({ pokemon, deletePokemon, editPokemon }) => {
  return (
    <tr key={pokemon.name}>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{pokemon.name}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{pokemon.price}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        {/* <div className="text-sm text-gray-500">{pokemon.imageUrl}</div> */}
        <Image src={pokemon.imageUrl} alt="Image description" width={75} height={75} />
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{pokemon.types}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{pokemon.abilities}</div>
      </td>
      <td className="text-right px-6 py-4 whitespace-nowrap">
        <a
          onClick={(e, id, name) => editPokemon(e, pokemon.id, pokemon.name)}
          className="text-indigo-600 hover:text-indigo-800 hover:cursor-pointer px-4">
          Edit
        </a>
        <a
          onClick={(e, name) => deletePokemon(e, pokemon.name)}
          className="text-indigo-600 hover:text-indigo-800 hover:cursor-pointer">
          Delete
        </a>
      </td>
    </tr>
  );
};

export default Pokemon;
