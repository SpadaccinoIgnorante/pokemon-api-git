import React,{useEffect,useState,useContext} from 'react'
import '../Css/PokeList.css' 
import PokemonBadge from './PokemonBadge'
import {PokemonContext} from '../Contexts/PokemonContext'
import MPokemon from '../Models/MPokemon';
import ContainerText from '../Components/ContainerText'

function TeamListContainer() {
    
    const [pokemonAdded,setPokemonAdded] = useContext(PokemonContext);
    const [team, setTeam] = useState([])
    const [teamToDisplay, setTeamToDisplay] = useState([]);
    

    useEffect(() => 
    {
        setTeamToDisplay(team.map(pokemonModel => <PokemonBadge key={pokemonModel.name} pokemonModel={pokemonModel}/>))
    },[team]);
    
    // Perform when a pokemon is added
    useEffect(() => 
    {
        if(pokemonAdded === undefined || pokemonAdded.name === undefined)
            return;

        const pkmnIndex = team.findIndex(p => p.name == pokemonAdded.name)

        if(pkmnIndex == -1) {
            
            if(team.length >= 6) {
                alert("You have reached the maximum pokemon in your team, please remove one if you want to add a new one");
                return;
            }
            team.push(pokemonAdded);
        }
        else 
        {
            team.splice(pkmnIndex,1);
        }
       
        setTeam(team.map(pokemon => pokemon));

    },[pokemonAdded]);

    return (
        <ol className='team'>
            <ContainerText text="Team"/>
            {teamToDisplay.length == 0 ? "Add a pokemon clicking on the badge" : teamToDisplay}
        </ol>
    )
}

export default TeamListContainer
