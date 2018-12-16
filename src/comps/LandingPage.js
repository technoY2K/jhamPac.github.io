import React, { useState } from 'react'
import imgSrc from 'images/hero_background.jpg'

export default function LandingPage() {
  const [count, setCount] = useState(0)

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
          <p>{`The count is ${count}`}</p>
        </div>
        <div className="col s12 m6 contact">
          <button className="btn btn-blue" onClick={ () => setCount(count + 1) }>Click Me</button>
        </div>
      </div>
    </div>
  )
}
