import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios'



export const PokemonContext = createContext()
export function PokemonProvider(props) {
    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
        // setIsFetching(true);
        axios
            .get(`https://cdn.theprojectfactory.com/pokemon/get.php`)
            .then((res) => {
                // setIsFetching(false);
                setPokemon(res.data.pokemon);
            })
            .catch((err) => {
                // setIsFetching(false);
                console.log(err);
            });
    }, []);


    return <PokemonContext.Provider value=
        {{
            pokemon
        }}>
        {props.children}
    </PokemonContext.Provider>
}
