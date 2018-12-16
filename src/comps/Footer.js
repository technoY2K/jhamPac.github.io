import React from 'react'

export default function Footer() {
  const today = new Date().getFullYear()

  return(
    <nav id="footer" className="row">
      <div className="col s12">
        <h5>{ today }</h5>
      </div>
    </nav>
  )
}
