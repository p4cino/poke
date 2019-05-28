import React, {Component} from 'react';
import './styles/PokeList.css';
import PokeCell from "./PokeCell";
import API from '../server';

class PokeList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            results: [],
        };
    }

    getPokemons() {
        const data = API.get(`pokemon`)
            .then(response => {
                this.setState({results: response.data.results});
            });
    }

    componentDidMount() {
        this.getPokemons();
    }

    render() {
        const cells = this.state.results.map(function (pokemon, key) {
            return (
                <PokeCell
                    key={key}
                    pokemon={{name: pokemon.name, url: pokemon.url}}
                />
            );
        });

        return (
            <div className="poke-list">
                {cells}
            </div>
        );
    }
}

export default PokeList;