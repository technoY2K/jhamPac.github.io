import React, { Component } from 'react';
import styles from 'utils/styles';

export default class App extends Component {
  render() {
    return (
      <main id="main" style={ { backgroundImage: `url(${styles.backgroundImage})` } }>
        <section className="nameBox">
          <h1>The Drunk Cactus</h1>
          <p>Get Home Safe</p>
        </section>
      </main>
    );
  }
}
