// Dependencies
import React    from 'react';
import ReactDOM from 'react-dom';

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
