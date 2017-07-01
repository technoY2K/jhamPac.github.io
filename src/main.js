// Dependencies
import React    from 'react'
import ReactDOM from 'react-dom'

// bind jQuery to $
import $ from 'jquery'

// scss
import './scss/main'

// components
import App from 'Comps/App'

$(document).ready(function() {

  ReactDOM.render(
    <App />,
    document.getElementById('app')
  )

})
