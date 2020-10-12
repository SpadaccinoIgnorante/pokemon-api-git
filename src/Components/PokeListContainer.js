import React, {useState, useEffect} from 'react'
import PokeResponse from '../Models/PokeResponse'
import AxiosRequest from '../Utils/AxiosRequest'
import PokemonBadge from './PokemonBadge';
import '../Css/PokeList.css' 

function PokeListContainer() {
    
    const pResponse = new PokeResponse()
    const [response, setResponse] = useState(pResponse)
    
    // Mount
    useEffect(() => 
    {
        AxiosRequest.get("https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0", (axiosResponse) => 
        {   
            setResponse(new PokeResponse(axiosResponse.results));
        },alert)
    }, [])

    if(!response || response.results.length === 0)
        return React.Fragment;

    const list = response.results.map(p => <PokemonBadge key={p.name} url={p.url}/>);

    return (
        <ol className='pokedex'>
            {list}
        </ol>
    )
}


export default PokeListContainer
