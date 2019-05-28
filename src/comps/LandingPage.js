import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function LandingPage() {
  return(
    <div id='landing-page' className="row">
      <div className="col s9 m7 text-body">
        <h3>Kevia Cloud</h3>
        <h4>I'm just an individual trying to make it in this world 🌍 just like you Currently im...</h4>
        <ul>
          <li>changing the world with blockchain technology</li>
          <li>wearing hawaiian shirts</li>
          <li>living in phoenix</li>
          <li>riding in teslas ⚡️</li>
          <li>building control panel software at some big COMPANY</li>
        </ul>
      </div>
    </div>
  )
}
