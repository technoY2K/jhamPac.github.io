import React, { useState } from 'react'
import { Link } from 'react-router-dom'

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
          <p>Currently working with:</p>
          <p>React 🥇</p>
          <p>Parcel 🥇</p>
          <p>GraphQL 🥈</p>
          <p>Firebase 🥈</p>
          <span>I love movies from the 1990s like The 5th Element and even terrible ones like Demolition Man. Prada > Gucci right now and Mokba is the jamz!</span>
        </div>
        <div className="col s12 m6 contact">
          <ul>
            <li>
              <div className="padded-multiline red">
                <a href="https://www.linkedin.com/in/kevia-cloud/" target="_blank">linkedin</a>
              </div>
            </li>
            <li>
              <div className="padded-multiline red">
                <a href="https://twitter.com/keviaDotMe" target="_blank">twitter</a>
              </div>
            </li>
            <li>
              <div className="padded-multiline red">
                <a href="https://github.com/jhamPac" target="_blank">github</a>
              </div>
            </li>
            <li>
              <div className="padded-multiline black center-align">
                <Link to="/1717">17:17</Link>
              </div>
            </li>
            <li>
              <div className="padded-multiline purple center-align">
                <Link to="/shmule">shmule</Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
