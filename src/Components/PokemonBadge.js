import React, {useState, useContext, useEffect} from 'react'
import PokemonText from '../Components/PokemonText'
import PokemonImage from '../Components/PokemonImage'
import '../Css/PokeList.css'

function PokemonBadge(props) {

    const {pokemonModel,onClickBadge} = props;

    if(pokemonModel.isActive == false)
        return React.Fragment

    return (
        <li className={pokemonModel.isInTeam ? 'team' : 'pokedex'} onClick={() => onClickBadge(pokemonModel)}>
            <PokemonImage imgUrl={pokemonModel.normalSprite}/>
            <PokemonText text={pokemonModel.name}/>
        </li>
    )

}

export default PokemonBadge

