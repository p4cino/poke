import React from 'react';
import './styles/PokeCell.css';

const PokeCell = ({pokemon}) => {
    const endpoint = "http://pokestadium.com/sprites/xy/";
    return (<button className="poke-cell"><img src={endpoint + pokemon.name + ".gif"} /></button>);
}

export default PokeCell;