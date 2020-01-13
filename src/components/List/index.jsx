import React from 'react';

import styles from './List.module.scss';
import ListCell from "./ListCell";

class List extends React.Component {
    render() {
        return (
            <div className={styles.wrapper}>
                <ul className={styles.list}>
                    <ListCell/>
                    <ListCell/>
                    <ListCell/>
                    <ListCell/>
                    <ListCell/>
                    <ListCell/>
                    <ListCell/>
                    <ListCell/>
                    <ListCell/>
                    <ListCell/>
                </ul>
            </div>
        );
    }
}

export default List;
