import React, { useEffect } from 'react';

import { useAuth0 } from './contexts/auth0-context';
import { useStore } from './contexts/store';

import { fetchOrCreatePlayer } from './requests/players';
import { fetchCharactersForPlayer } from './requests/characters';
import { setPlayer } from './actions/players';
import { setCharacters } from './actions/characters';

import Header from './components/layout/Header';
import Body from './components/layout/Body';

import 'bulma/css/bulma.css';

function App() {
  const { isAuth, user } = useAuth0();
  const { dispatch } = useStore();

  useEffect( () => {
    if( isAuth && user ) {
      fetchOrCreatePlayer( user )
        .then( ( player ) => {
          dispatch( setPlayer( player ) )
          fetchCharactersForPlayer( player )
            .then( ( { data } ) => {
              dispatch( setCharacters( data ) );
            } );
        } );
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
