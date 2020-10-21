import React, {useState, useEffect} from 'react'
import PokeResponse from '../Models/PokeResponse'
import AxiosRequest from '../Utils/AxiosRequest'
import PokemonBadge from './PokemonBadge';
import '../Css/PokeList.css' 
import MPokemon from '../Models/MPokemon';
import ContainerText from './ContainerText';

function PokeListContainer() {
    
    const [response, setResponse] = useState(new PokeResponse());
    const [pokemonBadges, setBadges] = useState([]);

    // Triggered after response is changed and fill pokemonBadges
    useEffect(() => 
    {
        const list = response.results.map(response => <PokemonBadge key={response.name} pokemonModel={new MPokemon(response.name,
                                                                                                    response.sprites.front_shiny,
                                                                                                    response.sprites.front_default,
                                                                                                    response.sprites.other["official-artwork"].front_default)}/>);

        setBadges(list);

    },[response]);

    // onMount and perform all promises
    useEffect(() => 
    {
        AxiosRequest.get("https://pokeapi.co/api/v2/pokemon?limit=500&offset=0", (axiosResponse) => 
        {   
            const promises = axiosResponse.results.map(r => AxiosRequest.getPromise(r.url));
            
            AxiosRequest.getAll(promises, (responseArray) => 
            {
                setResponse(new PokeResponse(responseArray.map(response => response.data)));
            },alert);
        
        },alert)
    }, [])

    // If all promises are not done, print the Loading content...
    if(pokemonBadges.length == 0)
        return <h2>Loading content...</h2>;

    // Render all badges
    return (
        <ol className='pokedex'>
            <ContainerText text="Pokedex"/>
            {pokemonBadges}
        </ol>
    )
}


export default PokeListContainer
