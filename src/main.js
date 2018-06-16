// Dependencies
import React    from 'react';
import ReactDOM from 'react-dom';

// bind jQuery to $
let $ = window.jQuery = require('jquery');
require('materialize-css/bin/materialize.js');

// scss
import './scss/main';

// components
import App from 'comps/';

$(document).ready(function() {
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  );
});
