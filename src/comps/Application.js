import React, {Component, lazy, Suspense} from 'react'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import injectSheet from 'react-jss'
import styles from './styles'

import NavigationBar from './NavigationBar'
import Footer        from './Footer'
const LandingPage = lazy(() => import('./LandingPage'))

function Application(props) {
  return (
    <Router>
      <main id="UI" className={props.classes.main}>
        <Suspense fallback={<div><h3>Loading...</h3></div>}>
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
          </Switch>
        </Suspense>
        <Footer />
      </main>
    </Router>
  )
}

export default injectSheet(styles)(Application)
