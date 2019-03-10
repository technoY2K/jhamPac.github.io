import React from 'react'
import { AppContextConsumer } from './Application'

export default function Footer() {
  return(
    <AppContextConsumer>
      {
        ({turnLeft, turnRight}) => (
          <nav id="footer" className="row container">
            <div className="col s12">
              <button className="btn" onClick={turnLeft}>
                <i className="material-icons">
                  arrow_back
                </i>
              </button>
              <button className="btn" onClick={turnRight}>
                <i className="material-icons">arrow_forward</i>
              </button>
            </div>
          </nav>
        )
      }
    </AppContextConsumer>
  )
}
