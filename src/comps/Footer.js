import React from 'react'
import { withRouter } from 'react-router'

function Footer({ location }) {
  const date = (location.pathname === '/1717') ? '17:17' : new Date().getFullYear()

  return(
    <nav id="footer" className="row">
      <div className="col s12">
        <h5>{date}</h5>
      </div>
    </nav>
  )
}

export default withRouter(Footer);
