import React from "react";

import styles from './List.module.scss';

export default function ListCell(props) {
    const endpoint = "http://pokestadium.com/img/sprites/main-series/xy/";
    const src = endpoint + props.name + ".gif";
    return (
      <li className={styles.cellWrapper}>
          <button className={styles.cell}>
              <img className={styles.image} src={src} alt={props.name} />
          </button>
      </li>
    );
}
