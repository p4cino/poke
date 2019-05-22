import React, {Component} from 'react';
import './styles/PokeList.css';
import PokeCell from "./PokeCell";

class PokeList extends Component {
    const
    api = "https://pokeapi.co/api/v2";

    constructor(props) {
        super(props);
        this.limit = 30;
        this.apiQuery = '/pokemon/';
        this.state = {
            results: [],
            value: '',
            suggestions: [],
            showSuggestions: false
        };
    }

    componentDidMount() {
        fetch(this.api + this.apiQuery)
            .then(response => response.json())
            .then(data => this.setState({results: data.results}));
    }

    render() {
        const cells = this.state.results.map(pokemon => {
            return (
                <PokeCell
                    pokemon={{name: pokemon.name}}
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