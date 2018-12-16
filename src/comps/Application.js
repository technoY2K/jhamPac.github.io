import React, { Component } from 'react'
import LandingPage   from './LandingPage'
import NavigationBar from './NavigationBar'

export default class Application extends Component {
  render() {
    return(
      <main id="UI">
        <NavigationBar />
        <LandingPage />
      </main>
    )
  }
}
