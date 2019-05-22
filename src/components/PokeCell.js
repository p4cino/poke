import React from 'react';
import './styles/PokeCell.scss';

const PokeCell = ({pokemon, handleOnClick}) => {
    const { name, key } = pokemon;

    const endpoint = "http://pokestadium.com/sprites/xy/";
    const src = endpoint + name + ".gif";

    return (<button onClick={() => handleOnClick(key)} className="poke-cell"><img src={src} alt={name} /></button>);
}

export default PokeCell;