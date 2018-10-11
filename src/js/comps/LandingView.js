import React from 'react';
import styles from 'utils/styles';

function Hero(props) {
  return (
    <div className="col s12 hero" style={ { backgroundImage: `url(${styles.backgroundImage})` } }>
      <h1>[Some Name]</h1>
      <p>Explore Arizona in a Tesla</p>
    </div>
  );
}

function Trips(props) {
  return (
    <div className="container">
      <div className="col s12">
        <h2>Cool trips</h2>
      </div>
    </div>
  );
}

export default function LandingView(props) {
  return(
    <main id="landing-view" className="row">
      <Hero />
      <Trips />
    </main>
  );
}
