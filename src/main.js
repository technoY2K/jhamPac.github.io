// Dependencies
import React    from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

// scss
import './scss/main';

// components
import Application from 'comps/Application';

const reactHotReload = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app')
  );
}

$(document).ready(function() {
  reactHotReload(Application);
  if (module.hot) {
    module.hot.accept();
  }
});
