import React, { Component, lazy, Suspense } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import NavigationBar from './NavigationBar'
const LandingPage = lazy(() => import('./LandingPage'))

export default class Application extends Component {
  render() {
    return(
      <Router>
        <main id="UI">
          <NavigationBar />
          <Suspense fallback={ <div><h3>Loading...</h3></div> }>
            <Switch>
              <Route path="/">
                <LandingPage />
              </Route>
            </Switch>
          </Suspense>
        </main>
      </Router>
    )
  }
}
