import React, {Component} from 'react';
import './styles/PokeList.css';
import PokeCell from "./PokeCell";

//@todo rewrite api connect to another file and refactor this file
class PokeList extends Component {
    const
    api = "https://pokeapi.co/api/v2";

    constructor(props) {
        super(props);
        this.endpoint = '/pokemon/';
        this.state = {
            results: [],
            value: '',
            suggestions: [],
            showSuggestions: false
        };
    }

    componentDidMount() {
        fetch(this.api + this.endpoint)
            .then(response => response.json())
            .then(data => this.setState({results: data.results}));
    }

    render() {
        const cells = this.state.results.map(function(pokemon, key) {
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