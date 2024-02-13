import {createContext, useState, useEffect, useContext} from "react";
import {PokedexContext} from "./Context.jsx";
import axios from "axios";
import {URLAPI} from "../constants/URLAPI.jsx";

export const ApiContext = createContext();

export const ApiProvider = ({children})=>{

    const [pokemons, setPokemons] = useState([]);
    const [next, setNext] = useState("");
    const [previous, setPrevious] = useState("");
    const handleNext = (url) => {
        requestPokemon(next);
    };
    const handlePrevious = (url) => {
        requestPokemon(previous);
    };
    const requestPokemon = async (url) => {
        const response = await axios.get(url);
        setNext(response.data.next);
        setPrevious(response.data.previous);
        Promise.all(
            response.data.results.map((pokemon) => axios.get(pokemon.url))
        ).then((data) => {
            setPokemons(data);
        });
    };
    useEffect(()=>{
        requestPokemon(URLAPI + "pokemon");
    }, [])



    const contextValue = {
        pokemons,
        handleNext,
        handlePrevious
    }
    return(
    <ApiContext.Provider value={contextValue}>
        {children}
    </ApiContext.Provider>
    )}
