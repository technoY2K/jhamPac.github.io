import React, { Component } from 'react'

import imgSrc from 'images/hero_background.jpg'

export default class Application extends Component {
  render() {
    return(
      <main id="UI">
        <nav className="row">
          <div className="col s12">
            
          </div>
        </nav>
        <div className="row top-half" style={{ backgroundImage: `url(${imgSrc})` }}>
          <div className="tint-box"></div>
          <div className="col s12 text-box">
            <p className="title-name">Kevia Cloud</p>
            <h3>Software Engineer</h3>
            <div className="divider"></div>
          </div>
        </div>
        <div className="row nomargin bottom-half">
          <div className="col s12 m6 bio">
            <p>asdfasf</p>
          </div>
          <div className="col s12 m6 contact">

          </div>
        </div>
      </main>
    )
  }
}
