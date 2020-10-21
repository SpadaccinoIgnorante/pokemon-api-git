import React from 'react'
import DefaultImage from '../Assets/Images/Pokéball_64.png'
import '../Css/PokeList.css'

function PokemonImage(props) {

    const {imgUrl} = props;

    let image;

    if(imgUrl != null && imgUrl != undefined)
        image = imgUrl;
    else
        image = DefaultImage;


    return <img className='pokemon' src={image}></img>
}

export default PokemonImage
