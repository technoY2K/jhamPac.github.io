import React    from 'react'
import ReactDOM from 'react-dom'

// scss
import './scss/main'

function Prada() {
  return(
    <div id="UI">Welcome</div>
  )
}

function render(Component) {

  ReactDOM.render(
    <Component />,
    document.getElementById('mount-point')
  )
}

if (document.readyState !== 'loading') {
  render(Prada);
} else {
  document.addEventListener('DOMContentLoaded', render.bind(null, Prada))
}
