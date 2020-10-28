import React,{useState} from 'react'
import MPokemon from '../Models/MPokemon'

export const PokemonContext = React.createContext([new MPokemon(),() => {}]);

// Create a provider for components to consume and subscribe to changes
export const PokemonContextProvider = props => 
{
    const [pokemon, setPokemon] = useState(new MPokemon());

    return (
      <PokemonContext.Provider value={[pokemon, setPokemon]}>
        {props.children}
      </PokemonContext.Provider>
    );
};