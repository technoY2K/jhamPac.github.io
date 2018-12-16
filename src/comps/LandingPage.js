import React, { useState } from 'react'
import imgSrc from 'images/hero_background.jpg'

export default function LandingPage() {
  return(
    <div id='landing-page'>
      <div className="row top-half">
        <div className="col s12 text-box">
          <p className="title-name">Kevia Cloud</p>
          <h3>Software Engineer</h3>
          <div className="divider"></div>
        </div>
      </div>
      <div className="row bottom-half">
        <div className="col s12 m6 bio">
          <p>Currently working with React, Parcel, GraphQL, serverless and Google Cloud Functions. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
        </div>
        <div className="col s12 m6 contact">
          <ul>
            <li>
              <div className="padded-multiline">
                <a href="https://www.linkedin.com/in/kevia-cloud/" target="_blank">linkedin</a>
              </div>
            </li>
            <li>
              <div className="padded-multiline">
                <a href="https://twitter.com/keviaDotMe" target="_blank">twitter</a>
              </div>
            </li>
            <li>
              <div className="padded-multiline">
                <a href="https://github.com/jhamPac" target="_blank">github</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
