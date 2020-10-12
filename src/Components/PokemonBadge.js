import AxiosRequest from "../Utils/AxiosRequest";
import React, {useState, useEffect} from 'react'
import DefaultImage from '../Assets/Images/Pokéball_64.png'
import '../Css/PokeList.css'

export const PokemonContext = React.createContext(); 

function PokemonBadge(props) {

    const {url, pokemonCopy} = props;

    if(pokemonCopy != null || pokemonCopy != undefined)
        console.log(pokemonCopy.name);

    // Pokemon model
    const mpokemon = 
    {
        name : "",
        shinySprite : "shinyUrl",
        normalSprite : "normalUrl",
        artworkSprite : "artworkUrl",
        isInTeam : false
    }

    const [pokemon, setPokemon] = useState(mpokemon)

    useEffect(() => 
    {
        if(pokemonCopy != null && pokemonCopy != undefined)
            return;
        AxiosRequest.get(url, (axiosResponse) => 
        {
            mpokemon.name = axiosResponse.name;
            mpokemon.shinySprite = axiosResponse.sprites.front_shiny;
            mpokemon.normalSprite = axiosResponse.sprites.front_default;
            mpokemon.artworkSprite = axiosResponse.sprites.other["official-artwork"].front_default;
           
            setPokemon(Object.create(mpokemon));
        }, (err) => 
        {
            alert(err);
        });
    },[])

    function setAsTeamBadge() {

        if(pokemon === undefined)return;

        pokemon.isInTeam = !pokemon.isInTeam;

        setPokemon(Object.create(pokemon))
    }

    let image;

    if(pokemon.isInTeam || pokemon.normalSprite != null)
        image = pokemon.normalSprite;
    else
        image = DefaultImage;

    return (
        <PokemonContext.Provider value={pokemon}>
        <li className='pokedex' onClick={setAsTeamBadge}>
            <img className='pokemon' src={image}></img>
            <p className='pokemonText'>{pokemon.name}</p>
        </li>
        </PokemonContext.Provider>
    )

}

export default PokemonBadge
