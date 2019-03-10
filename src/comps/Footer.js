import React from 'react'
import { AppContextConsumer } from './Application'

export default function Footer() {
  return(
    <AppContextConsumer>
      {
        ({turnLeft, turnRight}) => (
          <nav id="footer" className="row container">
            <div className="col s12">
              <button onClick={turnLeft}>Left</button>
              <button onClick={turnRight}>Right</button>
            </div>
          </nav>
        )
      }
    </AppContextConsumer>
  )
}
