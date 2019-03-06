import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function LandingPage() {
  return(
    <div id='landing-page' className="container">
      <div className="wrap">
	       <div className="cube">
		      <div className="front"></div>
		      <div className="back"></div>
		      <div className="top"></div>
		      <div className="bottom"></div>
		      <div className="left"></div>
		      <div className="right"></div>
	      </div>
      </div>
    </div>
  )
}
