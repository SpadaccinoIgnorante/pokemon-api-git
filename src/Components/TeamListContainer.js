import React,{useEffect,useState,useContext} from 'react'
import '../Css/PokeList.css' 
import PokemonBadge, {PokemonContext} from './PokemonBadge'

function TeamListContainer() {
    
    const pokemonAdded = useContext(PokemonContext)
    const [team, setPokemon] = useState([])
    
    useEffect(() => 
    {
        setPokemon(team.push(pokemonAdded))
    },PokemonContext)


    return (
        <ol className='team'>
            <li className='team'>TEST</li>
            <li className='team'>Length : {team.length}</li>
        </ol>
    )
}

//map(pb => <PokemonBadge url='' pokemonCopy={pokemonAdded}/>)

export default TeamListContainer
