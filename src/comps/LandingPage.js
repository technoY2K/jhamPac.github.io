import React, { useState } from 'react'
import imgSrc from 'images/hero_background.jpg'

export default function LandingPage() {

  return(
    <div id='landing-page'>
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

        </div>
        <div className="col s12 m6 contact">
          <ul>
            <li>
              <div className="padded-multiline">
                <a href="#">linkedin</a>
              </div>
            </li>
            <li>
              <div className="padded-multiline">
                <a>twitter</a>
              </div>
            </li>
            <li>
              <div className="padded-multiline">
                <a>github</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
