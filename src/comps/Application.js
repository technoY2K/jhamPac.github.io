import React, { Component, lazy, Suspense } from 'react'
import NavigationBar from './NavigationBar'

const LandingPage = lazy(() => import('./LandingPage'));

export default class Application extends Component {
  render() {
    return(
      <main id="UI">
        <NavigationBar />
        <Suspense fallback={ <div><h3>Loading...</h3></div> }>
          <LandingPage />
        </Suspense>
      </main>
    )
  }
}
