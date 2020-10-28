import React,{useEffect,useState,useContext} from 'react'
import '../Css/PokeList.css' 
import PokemonBadge from './PokemonBadge'
import {PokemonContext} from '../Contexts/PokemonContext'
import {FunctionContext} from '../Contexts/FunctionPokemonContext'
import ContainerText from '../Components/ContainerText' 

function TeamListContainer() {
    
    const [pokemonAdded,setPokemonAdded] = useContext(PokemonContext);
    const [team, setTeam] = useState([])
    const [functionContext,setFunctionContext] = useContext(FunctionContext);

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
       
        // Set active all pokemon in team
        team.forEach(m => m.isActive = true);

        setTeam(team.map(pokemon => pokemon));

    },[pokemonAdded]);

    if(functionContext == undefined)
        return React.Fragment;

    return (
        <ol className='team'>
            <ContainerText text="Team"/>
            {team.length == 0 ? "Add a pokemon clicking on the badge" : team.map(pokemonModel => <PokemonBadge key={pokemonModel.name} 
                                                                                                                    pokemonModel={pokemonModel} 
                                                                                                                    onClickBadge={functionContext}/>)}
        </ol>
    )
}

export default TeamListContainer
