// Dependencies
import React    from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

// scss
import './scss/main';

// components
import Application from 'comps/Application';

function render(Component) {

  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app')
  );

  if (module.hot) {
    module.hot.accept();
  }
}

if (document.readyState !== 'loading') {
  render(Application);
} else {
  document.addEventListener('DOMContentLoaded', render.bind(null, Application));
}
