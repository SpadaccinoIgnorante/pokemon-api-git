import React, {useState, useContext, useEffect} from 'react'
import {PokemonContext} from "../Contexts/PokemonContext";
import PokemonText from '../Components/PokemonText'
import PokemonImage from '../Components/PokemonImage'
import '../Css/PokeList.css'
import MPokemon from '../Models/MPokemon';

function PokemonBadge(props) {

    const {pokemonModel,isOriginal,onModelChanged} = props;

    const [pokemonContext,setPokemonContext] = useContext(PokemonContext);

    const [mPokemon, setPokemon] = useState(pokemonModel);

    function setAsTeamBadge() {

        if(!isOriginal && mPokemon.onResetOriginal != null) {
            mPokemon.onResetOriginal();
        }

        const newPokemon = new MPokemon(mPokemon.name,
                                        mPokemon.shinySprite,
                                        mPokemon.normalSprite,
                                        mPokemon.artworkSprite,
                                        !mPokemon.isInTeam,
                                        null);
        setPokemonContext(newPokemon);

        setPokemon(newPokemon);

        if(onModelChanged != null && onModelChanged != undefined)
            onModelChanged(newPokemon);
    }

    function resetOriginal() {

        if(!isOriginal)return;

        const newPokemon = new MPokemon(mPokemon.name,
                                        mPokemon.shinySprite,
                                        mPokemon.normalSprite,
                                        mPokemon.artworkSprite,
                                        false,
                                        resetOriginal);

        setPokemon(newPokemon);
    }

    const styleClass = mPokemon.isInTeam ? 'team' : 'pokedex';

    return (
        <li className={styleClass} onClick={setAsTeamBadge}>
            <PokemonImage imgUrl={mPokemon.normalSprite}/>
            <PokemonText text={mPokemon.name}/>
        </li>
    )

}

export default PokemonBadge
