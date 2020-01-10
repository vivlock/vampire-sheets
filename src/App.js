import React, { useEffect } from 'react';

import { useAuth0 } from './contexts/auth0-context';
import { useStore } from './contexts/store';

import { setUpPlayerData } from './effects/players';

import Header from './components/layout/Header';
import Body from './components/layout/Body';

import '@fortawesome/fontawesome-free/css/all.css';
import 'bulma/css/bulma.css';

function App() {
  const { isAuth, user } = useAuth0();
  const { dispatch } = useStore();

  useEffect( () => {
    if( isAuth && user ) {
      setUpPlayerData( user, dispatch );
    }
  }, [isAuth, user, dispatch] );

  return (
    <>
      <Header />
      <Body />
    </>
  );
}

export default App;
