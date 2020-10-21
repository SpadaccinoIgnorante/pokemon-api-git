import React, {useState, useContext} from 'react'
import {PokemonContext} from "../Contexts/PokemonContext";
import PokemonText from '../Components/PokemonText'
import PokemonImage from '../Components/PokemonImage'
import '../Css/PokeList.css'
import MPokemon from '../Models/MPokemon';

function PokemonBadge(props) {

    const {pokemonModel} = props;

    const [pokemonContext,setPokemonContext] = useContext(PokemonContext);

    const [mPokemon, setPokemon] = useState(pokemonModel);

    function setAsTeamBadge() {

        const newPokemon = new MPokemon(mPokemon.name,
                                        mPokemon.shinySprite,
                                        mPokemon.normalSprite,
                                        mPokemon.artworkSprite,
                                        !mPokemon.isInTeam);

        setPokemonContext(newPokemon);

        setPokemon(newPokemon);
    }

    const styleClass = mPokemon.isInTeam ? 'team' : 'pokedex'

    return (
        <li className={styleClass} onClick={setAsTeamBadge}>
            <PokemonImage imgUrl={mPokemon.normalSprite}/>
            <PokemonText text={mPokemon.name}/>
        </li>
        )

}

export default PokemonBadge
