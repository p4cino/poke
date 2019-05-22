import React from 'react';
import './styles/PokeCell.css';

const PokeCell = ({ pokemon }) => <button className="poke-cell">{pokemon.name}</button>;

export default PokeCell;