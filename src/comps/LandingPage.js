import React, { useState } from 'react'
import { Link } from 'react-router-dom'

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
		      <div className="front"></div>
		      <div className="back"></div>
		      <div className="top"></div>
		      <div className="bottom"></div>
		      <div className="left"></div>
		      <div className="right"></div>
	      </div>
      </div>
      <section>
        <button onClick={ turnLeft }>Left</button>
        <button onClick={ turnRight }>Right</button>
      </section>
    </div>
  )
}
