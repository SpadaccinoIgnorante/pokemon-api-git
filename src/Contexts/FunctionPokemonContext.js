import React,{useState} from 'react'
import MPokemon from '../Models/MPokemon'

export const FunctionContext = React.createContext([() => {},() => {}]);

// Create a provider for components to consume and subscribe to changes
export const FunctionContextProvider = props => 
{
    const [funct, setFunction] = useState(() => {});
    
    return (
      <FunctionContext.Provider value={[funct,setFunction]}>
        {props.children}
      </FunctionContext.Provider>
    );
};