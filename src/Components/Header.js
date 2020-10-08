import React from 'react'
import '../Css/HeaderStyle.css'

const pokemonLogo = 'https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg'

function Header() {
    return (
        <header className='header'>
            <img src={pokemonLogo} className='img'></img>
            <h1 className='h1'>Pokèmon TB</h1>
        </header>
    )
}

export default Header
