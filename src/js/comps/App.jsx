import React from 'react'

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
              <a href="https://www.linkedin.com/in/kevia-cloud-3291b5137">
                <div className="chip">
                  <i className="material-icons">group_work</i>
                  <span>LinkedIn</span>
                </div>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/therealcloud__">
                <div className="chip">
                  <i className="material-icons">flash_on</i>
                  <span>Twitter</span>
                </div>
              </a>
            </li>
            <li>
              <a href="https://github.com/jhamPac">
                <div className="chip">
                  <i className="material-icons">desktop_mac</i>
                  <span>GitHub</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </main>
    )
  }

}
