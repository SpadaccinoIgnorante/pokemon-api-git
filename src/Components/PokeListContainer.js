import React, {useState, useEffect} from 'react'
import axios from 'axios'
import PokeResponse from '../Models/PokeResponse'
import AxiosRequest from '../Utils/AxiosRequest'
import MPokemon from '../Models/MPokemon';

function PokeListContainer() {
    
    const pResponse = new PokeResponse()
    const [response, setResponse] = useState(pResponse)
    
    // Update
    useEffect(() => 
    {
        AxiosRequest.Get("https://pokeapi.co/api/v2/pokemon?limit=1&offset=0", (axiosResponse) => 
        {
            const pokemons = axiosResponse.results.map(p => new MPokemon(p.url));
            
            setResponse(new PokeResponse(pokemons));
        },(err) =>
        {
            alert(err)
        })
    }, [])

    // Mount

    if(!response || response.results.length == 0)
        return React.Fragment;

        console.log(response);
    return (
        <div>
           
        </div>
    )
}


export default PokeListContainer
