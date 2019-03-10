import React from 'react'
import { Link } from 'react-router-dom'

// images
import oneSrc from '../images/one.jpg'
import twoSrc from '../images/two.jpg'
import threeSrc from '../images/three.jpg'

export default function LandingPage({ degrees }) {
  const styleObj = {
    transform: `translateZ(-100px) rotateY(${degrees}deg)`
  }

  return(
    <div id='landing-page'>
      <div className="wrap">
	       <div className="cube" style={styleObj}>
		      <div className="front" style={{backgroundImage: `url(${oneSrc})`}}></div>
          <div className="left" style={{backgroundImage: `url(${twoSrc})`}}></div>
		      <div className="back" style={{backgroundImage: `url(${threeSrc})`}}></div>
          <div className="right">
            <section>
              <p>{`Conteact Me: 📧  🦜`}</p>
              <p>I know theres some LOREM IPSUM on here 😏</p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </section>
          </div>
		      <div className="top"></div>
		      <div className="bottom"></div>
	      </div>
      </div>
    </div>
  )
}
