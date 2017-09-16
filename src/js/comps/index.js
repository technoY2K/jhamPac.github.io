import React from 'react';

export default class App extends React.Component {

  render() {
    return (
      <main id="main">
        <div className="text-box">
          <h1>Kevia Cloud</h1>
          <p>Front End Developer</p>
          <p>Scottsdale, AZ</p>
        </div>
        <div className="purple-filter"></div>
        <div className="social-box">
          <ul>
            <li>
              <a className="btn-floating btn-large waves-effect waves-light linkedin" href="https://www.linkedin.com/in/kevia-cloud-3291b5137">
              </a>
            </li>
            <li>
              <a className="btn-floating btn-large waves-effect waves-light twitter" href="https://twitter.com/therealcloud__">
              </a>
            </li>
            <li>
              <a className="btn-floating btn-large waves-effect waves-light github" href="https://github.com/jhamPac">
              </a>
            </li>
          </ul>
        </div>
      </main>
    );
  }
}
