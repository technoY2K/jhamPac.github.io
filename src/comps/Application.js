import React, { createContext, lazy, Suspense, useEffect, useState } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import M from 'materialize-css'

// comps
import NavigationBar from './NavigationBar'
import Footer        from './Footer'
const LandingPage = lazy(() => import('./LandingPage'))

// context
const AppContext  = createContext()
export const AppContextConsumer = AppContext.Consumer

export default function Application() {
  const [ degrees, setDegree ] = useState(0)
  const turnLeft  = () => setDegree(degrees + 90)
  const turnRight = () => setDegree(degrees - 90)

  const context = {
    turnLeft,
    turnRight
  }

  useEffect(() => {
    M.AutoInit()
  })

  return (
    <Router>
      <AppContext.Provider value={context}>
        <section id="UI" className="container">
          <NavigationBar />
          <Suspense fallback={<div><h3>Loading...</h3></div>}>
            <Switch>
              <Route exact path="/">
                <LandingPage degrees={degrees} />
              </Route>
            </Switch>
          </Suspense>
          <Footer />
        </section>
      </AppContext.Provider>
    </Router>
  )
}
