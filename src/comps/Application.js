import React, { Component, lazy, Suspense } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import M from 'materialize-css'

import NavigationBar from './NavigationBar'
import Footer        from './Footer'
const LandingPage = lazy(() => import('./LandingPage'))

export default class Application extends Component {

  componentDidMount() {
    M.AutoInit()
  }

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
          <Footer />
        </main>
      </Router>
    )
  }
}
