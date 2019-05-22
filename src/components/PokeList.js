import React, {Component} from 'react';
import './styles/PokeList.css';
import PokeCell from "./PokeCell";

class PokeList extends Component {
    render() {
        return (
            <div className="poke-list">
                <PokeCell />
                <PokeCell />
                <PokeCell />
            </div>
        );
    }
}

export default PokeList;