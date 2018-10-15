import React from 'react';
import imgSrc from 'utils/imgSrc';
import Headline from './Headline';
import M from 'materialize-css';

function Hero(props) {

  function openFeature() {
    const elem = document.querySelectorAll('.tap-target');
    const instance = M.TapTarget.getInstance(elem[0]);
    instance.open();
  }

  return (
    <div className="col s12 hero">
      {
        props.children
      }
      <div className="fixed-action-btn">
        <a className="btn-floating btn-large red">
          <i id="tombstone" className="large material-icons">directions_car</i>
        </a>
      </div>

      <div className="col s12 m6">
        <div className="card">
          <div className="card-image" style={ { backgroundImage: `url(${imgSrc.fun})` } }>
            <span className="card-title">$95.00</span>

              <a id="tombstone" className="btn-floating halfway-fab red" onClick={ openFeature }>
                <i className="material-icons">details</i>
              </a>

              <div className="tap-target" data-target="tombstone">
                <div className="tap-target-content">
                  <h5>Tesla - Tombstone Arizona $95.00</h5>
                  <p>A one day trip is all you need to visit this historic western town.</p>
                </div>
              </div>
            </div>

          <div className="card-content">
            <p>I am a very simple card. I am good at containing small bits of information.
            I am convenient because I require little markup to use effectively.</p>
          </div>
        </div>
      </div>

      <div className="col s12 m6">
        <div className="card">
          <div className="card-image" style={ { backgroundImage: `url(${imgSrc.backgroundImage})` } }>
            <span className="card-title">$199.00</span>
            <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">details</i></a>
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

function TextBox(props) {
  return (
    <div className="container">
      <div className="col s12 text-box">
        {
          props.children
        }
        <p>
          {
            props.message
          }
        </p>
      </div>
    </div>
  );
}

export default function LandingView(props) {
  return(
    <main id="landing-view" className="row">
      <Hero>
        <Headline title="Electric Saguaro" tagline="Luxury (⚡️EV) electric vehicle rentals" />
      </Hero>

      <TextBox message="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.">
        <Headline title="Need a reboot?" tagline="Explore Arizona in a Tesla" />
      </TextBox>

    </main>
  );
}
