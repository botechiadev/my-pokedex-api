import { useEffect, useState, createContext, useContext } from "react";
import axios from "axios";

export const PokemonsContext = createContext();

export function PokemonsProvider({ children }) {
  const URL_API1 = "https://pokeapi.co/api/v2";

  const [pokedex, setPokedex] = useState([]);
  const [pokeType1, setPokeType1] = useState([]);
  const [next, setNext] = useState("");
  const [previous, setPrevious] = useState("");
  const [pokemons, setPokemons] = useState([]);
  const handleNext = () => {
    requestPokemon(next);
  };

  const handlePrevious = () => {
    requestPokemon(previous);
  };
  const addToPokedex = (pokemon) => {
    setPokedex([...pokedex, pokemon]);
  };

  const deleteToPokedex = (pokemon) => {
    setPokedex(pokedex.filter((poke) => poke.data.name !== pokemon.data.name));
  };

  const requestPokemon = async (url) => {
    const response = await axios.get(url);
    setNext(response.data.next);
    setPrevious(response.data.previous);
    const data = await Promise.all(
      response.data.results.map((pokemon) => axios.get(pokemon.url))
    );
    setPokemons(data);
  };

  useEffect(() => {
    requestPokemon(URL_API1 + "/pokemon");
  }, []);

  return (
    <PokemonsContext.Provider
      value={{
        pokedex,
        setPokedex,
        addToPokedex,
        deleteToPokedex,
        next,
        setNext,
        previous,
        setPrevious,
        pokemons,
        setPokemons,
        requestPokemon,
        handlePrevious,
        handleNext
      }}
    >
      {children}
    </PokemonsContext.Provider>
  );
}
