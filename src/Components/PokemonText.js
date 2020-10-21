import React from 'react'
import '../Css/PokeList.css'

function PokemonText(props) {

    const {text} = props

    return <p className='pokemonText'>{text}</p>
}

export default PokemonText
