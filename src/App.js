import React, { Component } from 'react';
import styles from './colors.css';

import Counter from './Counter';

export default class App extends Component {
  render() {
    return (
      <div>
        <Counter increment={1} className={styles.nice} />
        <Counter increment={5} className={styles.superNice} />
      </div>
    );
  }
}
