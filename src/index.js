import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './store/reducer';

import { Auth0Provider } from './contexts/auth0-context';
import { NavProvider } from './contexts/nav';

import App from './App';

const store = createStore( reducers );

ReactDOM.render(
  <Provider store={store}>
    <Auth0Provider>
        <NavProvider>
          <App />
        </NavProvider>
    </Auth0Provider>
  </Provider>,
  document.getElementById('root')
);
