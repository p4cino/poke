import React from 'react';

import API from "../../api";
import List from "../List";

import styles from './Pokedex.module.scss';
import {PokedexProvider} from "./PokedexContext";

class Pokedex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemons: [],
            apiQuery: '/pokemon/',
            limit: 30,
        }
    }

    getPokemons = async () => {
        const response = await API.get(`pokemon/`);
        this.setState({pokemons: response.data.results});
    };

    componentDidMount() {
        this.getPokemons();
    }

    render() {
        const {pokemons} = this.state;

        return (
            <PokedexProvider value={{state: this.state}}>
                <div className={styles.wrapper}>
                    <div className={styles.pokedex}>
                        <List pokemons={pokemons}/>
                    </div>
                </div>
            </PokedexProvider>
        );
    }
}

export default Pokedex;
