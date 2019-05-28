import React, {Component} from 'react';
import './styles/PokeList.css';
import PokeCell from "./PokeCell";
import API from '../server';

class PokeList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            results: [],
            limit: 10,
        };
        this.handleScroll = this.handleScroll.bind(this);
    }

    getPokemons() {
        const data = API.get(`pokemon`, {
            params: {
                limit: this.state.limit,
            }
        })
            .then(response => {
                this.setState({results: response.data.results});
            });
    }

    componentDidMount() {
        this.getPokemons();
    }

    handleScroll(event) {
        let offsetHeight = event.currentTarget.offsetHeight;
        let scrollTop = event.currentTarget.scrollTop;
        let scrollHeight = event.currentTarget.scrollHeight;

        let percentScroll = parseInt((scrollTop) / (offsetHeight - scrollHeight) * 100);

        console.log("offsetHeight: " + offsetHeight);
        console.log("scrollTop: " + scrollTop);
        console.log("scrollHeight: " + scrollHeight);

        if (percentScroll >= 80) {
            this.setState({limit:  + 5});
            this.getPokemons();
        }
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
            <div className="poke-list" onScroll={this.handleScroll}>
                {cells}
            </div>
        );
    }
}

export default PokeList;