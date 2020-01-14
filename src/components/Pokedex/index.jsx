import React from 'react';

import API from "../../api";
import List from "../List";

import styles from './Pokedex.module.scss';

class Pokedex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemons: [],
            apiQuery: '/pokemon/',
            limit: 30,
            increaseLimit: 10,
            isLoading: true,
        };
    }

    getPokemons = async () => {
        await API.get(`pokemon/`, {
            params: {
                limit: this.state.limit,
            }
        })
            .then(response => {
                this.setState(prevState => ({
                    pokemons: response.data.results,
                    isLoading: false
                }));
            })
            .catch(error => {
                console.log('Woops', error);
            });
    };

    handleScroll = (event) => {
        let offsetHeight = event.currentTarget.offsetHeight;
        let scrollTop = event.currentTarget.scrollTop;
        let scrollHeight = event.currentTarget.scrollHeight;
        let percentScroll = scrollTop / (scrollHeight - offsetHeight) * 100;

        if (percentScroll >= 80) {
            this.setState(prevState => ({
                limit: prevState.limit + this.state.increaseLimit,
            }));
            this.getPokemons();
        }
    };

    componentDidMount() {
        this.getPokemons();
    }

    render() {
        const {pokemons} = this.state;

        return (
            <div className={styles.wrapper}>
                <div className={styles.pokedex}>
                    <List scroll={this.handleScroll} pokemons={pokemons}/>
                </div>
            </div>
        );
    }
}

export default Pokedex;
