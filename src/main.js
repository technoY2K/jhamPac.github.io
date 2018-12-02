import React    from 'react'
import ReactDOM from 'react-dom'

import Application from 'comps/Application'

import './scss/main'

function render(Component) {

  ReactDOM.render(
    <Component />,
    document.getElementById('mount-point')
  )
}

if (document.readyState !== 'loading') {
  render(Application);
} else {
  document.addEventListener('DOMContentLoaded', render.bind(null, Application))
}
