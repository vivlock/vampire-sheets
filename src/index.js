import React from 'react';
import ReactDOM from 'react-dom';

import { Auth0Provider } from './contexts/auth0-context';
import { StateProvider } from "./contexts/store";

import App from './App';

ReactDOM.render(
  <Auth0Provider>
    <StateProvider>
      <App />
    </StateProvider>
  </Auth0Provider>,
  document.getElementById('root')
);
