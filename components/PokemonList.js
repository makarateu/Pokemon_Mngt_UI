import { React, useState, useEffect } from "react";
import EditPokemon from "./EditPokemon";
import Pokemon from "./Pokemon";

const PokemonList = ({ pokemon }) => {
  const POKEMON_API_BASE_URL = "http://localhost:8080/api/v1/pokemons";
  const [pokemons, setPokemons] = useState(null);
  const [loading, setLoading] = useState(true);
  const [pokemonId, setPokemonId] = useState(null);
  const [pokemonName, setPokemonName] = useState(null);
  const [responsePokemon, setResponsePokemon] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(POKEMON_API_BASE_URL, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const pokemons = await response.json();
        setPokemons(pokemons);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, [pokemon, responsePokemon]);

  const deletePokemon = (e, name) => {
    e.preventDefault();
    fetch(POKEMON_API_BASE_URL + "/" + name, {
      method: "DELETE",
    }).then((res) => {
      if (pokemons) {
        setPokemons((prevElement) => {
          return prevElement.filter((pokemon) => pokemon.name !== name);
        });
      }
    });
  };

  const editPokemon = (e, id, name) => {
    e.preventDefault();
    setPokemonId(id);
    setPokemonName(name);
  };

  return (
    <>
      <div className="container mx-auto my-8">
        <div className="flex shadow border-b">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-6">
                  Name
                </th>
                <th className="text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-6">
                  Price (£)
                </th>
                <th className="text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-6">
                  Photo
                </th>
                <th className="text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-6">
                  Types
                </th>
                <th className="text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-6">
                  Abilities
                </th>
                <th className="text-right font-medium text-gray-500 uppercase tracking-wide py-3 px-6">
                  Actions
                </th>
              </tr>
            </thead>
            {!loading && (
              <tbody className="bg-white">
                {pokemons?.map((pokemon) => (
                  <Pokemon
                    pokemon={pokemon}
                    key={pokemon.id}
                    deletePokemon={deletePokemon}
                    editPokemon={editPokemon}
                  />
                ))}
              </tbody>
            )}
          </table>
        </div>
      </div>
      <EditPokemon pokemonId={pokemonId} pokemonName={pokemonName} setResponsePokemon={setResponsePokemon} />
    </>
  );
};

export default PokemonList;
