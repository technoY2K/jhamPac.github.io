// Dependencies
import React    from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

// scss
import './scss/main';

// components
import App from 'comps/';

const reactHotReload = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app')
  );
}

$(document).ready(function() {
  reactHotReload(App);
  if (module.hot) {
    module.hot.accept();
  }
});
