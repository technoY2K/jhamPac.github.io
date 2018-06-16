import React, { Component } from 'react';

import styles from 'utils/styles';

export default class App extends Component {

  render() {
    return (
      <main id="main" style={ { backgroundImage: `url(${styles.backgroundImage})` } }>
        <div className="text-box">
          <h1>Kevia Cloud</h1>
          <p>Front End Developer</p>
          <p>Scottsdale, AZ</p>
        </div>
        <div className="purple-filter"></div>
        <div className="social-box">
          <ul>
            <li>
              <a className="btn-floating btn-large waves-effect waves-light social-media-icon" href="https://www.linkedin.com/in/kevia-cloud" target="_blank" style={ { backgroundImage: `url(${styles.linkedIn})` } }>
              </a>
            </li>
            <li>
              <a className="btn-floating btn-large waves-effect waves-light social-media-icon" href="https://twitter.com/therealcloud__" target="_blank" style={ { backgroundImage: `url(${styles.twitter})` } }>
              </a>
            </li>
            <li>
              <a className="btn-floating btn-large waves-effect waves-light social-media-icon" href="https://github.com/jhamPac" target="_blank" style={ { backgroundImage: `url(${styles.github})` } }>
              </a>
            </li>
          </ul>
        </div>
      </main>
    );
  }
}
