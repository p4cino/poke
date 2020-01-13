import React from 'react';
import PropTypes from 'prop-types';

import styles from './List.module.scss';
import ListCell from "./ListCell";

class List extends React.Component {
    static propTypes = {
        pokemons: PropTypes.array,
    };

    render() {
        const { pokemons, ...restProps } = this.props;

        return (
            <div className={styles.wrapper} {...restProps}>
                <ul className={styles.list}>
                    {
                        pokemons.map((pokemon, index) => <ListCell name={pokemon.name} key={index} />)
                    }
                </ul>
            </div>
        );
    }
}

export default List;
