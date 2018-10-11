import React from 'react';
import imgSrc from 'utils/imgSrc';
import Headline from './Headline';

function Hero(props) {
  return (
    <div className="col s12 hero">

      <Headline title="Saguaro Driver" tagline="Explore Arizona in a Tesla" />

      <div className="col s12 m6">
        <div className="card">
          <div class="card-image" style={ { backgroundImage: `url(${imgSrc.fun})` } }>
            <span className="card-title">Card Title</span>
            <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
          </div>
          <div className="card-content">
            <p>I am a very simple card. I am good at containing small bits of information.
            I am convenient because I require little markup to use effectively.</p>
          </div>
        </div>
      </div>

      <div className="col s12 m6">
        <div className="card">
          <div class="card-image" style={ { backgroundImage: `url(${imgSrc.backgroundImage})` } }>
            <span className="card-title">Card Title</span>
            <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
          </div>
          <div className="card-content">
            <p>I am a very simple card. I am good at containing small bits of information.
            I am convenient because I require little markup to use effectively.</p>
          </div>
        </div>
      </div>

    </div>
  );
}

function Trips(props) {
  return (
    <div className="container">
      <div className="col s12">
        <Headline title="Cool Trips" tagline="Visit Tombstone and Oatman" />
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
