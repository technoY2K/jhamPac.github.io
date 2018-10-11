import React from 'react';
import imgSrc from 'utils/imgSrc';
import Headline from './Headline';

function Hero(props) {
  return (
    <div className="col s12 hero">
      {
        props.children
      }
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
        <Headline title="Route 66" tagline="America's oldest highway" />
      </Hero>

      <TextBox message="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.">
        <Headline title="First date?" tagline="Family fun, anniversary, road trip buddies" />
      </TextBox>

      <Hero>
        <Headline title="Mojave Desert" tagline="Dubai like sand" />
      </Hero>
    </main>
  );
}
