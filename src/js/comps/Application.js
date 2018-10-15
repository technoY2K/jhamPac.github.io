import React, { Component } from 'react';
import M from 'materialize-css';

import LandingView from './LandingView';

export default class Application extends Component {

  componentDidMount() {
    M.AutoInit();
  }

  render() {
    return (
      <main id="main-UI">
        <LandingView />
      </main>
    );
  }
}
