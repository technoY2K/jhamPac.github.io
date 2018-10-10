import React, { Component } from 'react';
import styles from 'utils/styles';

export default class App extends Component {
  render() {
    return (
      <main id="main" style={ { backgroundImage: `url(${styles.backgroundImage})` } }>
        <section className="nameBox">
          <h1>Some Name</h1>
          <p>Experience Arizona in a Tesla</p>
        </section>
      </main>
    );
  }
}
