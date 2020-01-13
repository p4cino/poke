import React from "react";

import styles from './List.module.scss';

export default function ListCell() {
    return (
      <li className={styles.cellWrapper}>
          <button className={styles.cell}>
              <img className={styles.image} src="http://pokestadium.com/img/sprites/main-series/xy/pikachu.gif" alt="pikachu" />
          </button>
      </li>
    );
}
