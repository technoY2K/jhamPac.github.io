import React from 'react'
import { withRouter } from 'react-router'

function Footer() {
  const date = new Date().getFullYear()

  return(
    <nav id="footer" className="row">
      <div className="col s12">
        <ul className="left">
          <li><a href="https://twitter.com/keviaDotMe">twitter</a></li>
          <li className="dots">&bull;</li>
          <li><a href="https://github.com/jhamPac">github</a></li>
          <li className="dots">&bull;</li>
          <li><a href="https://www.linkedin.com/in/kevia-cloud">linkedIn</a></li>
        </ul>
        <span className="right">{date}</span>
      </div>
    </nav>
  )
}

export default withRouter(Footer);
