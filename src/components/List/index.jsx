import React from 'react';
import PropTypes from 'prop-types';

import styles from './List.module.scss';
import ListCell from "./ListCell";

class List extends React.Component {
    static propTypes = {
        pokemons: PropTypes.array,
        scroll: PropTypes.func.isRequired,
    };

    render() {
        const { scroll, pokemons } = this.props;

        return (
            <div className={styles.wrapper}>
                <ul onScroll={scroll} className={styles.list}>
                    {
                        pokemons.map((pokemon, index) => <ListCell name={pokemon.name} url={pokemon.url} key={index} />)
                    }
                </ul>
            </div>
        );
    }
}

export default List;
