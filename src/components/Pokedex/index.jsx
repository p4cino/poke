import React from 'react';

import styles from './Pokedex.module.scss';
import List from "../List";

class Pokedex extends React.Component {
    render() {
        return (
            <div className={styles.wrapper}>
                <div className={styles.pokedex}>
                    <List />
                </div>
            </div>
        );
    }
}

export default Pokedex;
