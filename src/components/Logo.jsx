import React from 'react';
import PokemonLogo from '../assets/images/logo.png'

function Logo() {
  return (
    <div>
        <img src={PokemonLogo} alt="Logo Pokémon" className="logo_header"/>
    </div>
  )
}

export default Logo