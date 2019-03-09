import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// images
import oneSrc from '../images/one.jpg'
import twoSrc from '../images/two.jpg'
import threeSrc from '../images/three.jpg'

export default function LandingPage() {
  const [ degrees, setDegree ] = useState(0)
  const turnLeft  = () => setDegree(degrees - 90)
  const turnRight = () => setDegree(degrees + 90)

  const styleObj = {
    transform: `translateZ(-100px) rotateY(${degrees}deg)`
  }

  return(
    <div id='landing-page' className="container">
      <div className="wrap">
	       <div className="cube" style={styleObj}>
		      <div className="front" style={{backgroundImage: `url(${oneSrc})`}}></div>
          <div className="left" style={{backgroundImage: `url(${twoSrc})`}}></div>
		      <div className="back" style={{backgroundImage: `url(${threeSrc})`}}></div>
          <div className="right">
            <p>Contact me Kevia Cloud</p>
            <p>Blahjas adsfasdf asdfasdf</p>
          </div>
		      <div className="top"></div>
		      <div className="bottom"></div>
	      </div>
      </div>
      <section>
        <button onClick={ turnLeft }>Left</button>
        <button onClick={ turnRight }>Right</button>
      </section>
    </div>
  )
}
