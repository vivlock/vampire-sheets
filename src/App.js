import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { useAuth0 } from './contexts/auth0-context';
import { setUpPlayerData } from './store/player/effects';

import Header from './components/layout/Header';
import Body from './components/layout/Body';

import '@fortawesome/fontawesome-free/css/all.css';
import 'bulma/css/bulma.css';
import "bulmaswatch/superhero/bulmaswatch.min.css";

function App( { setUpPlayerData } ) {
  const { isAuth, user } = useAuth0();

  useEffect( () => {
    if( isAuth && user ) {
      setUpPlayerData( user );
    }
  }, [isAuth, user, setUpPlayerData] );

  return (
    <>
      <Header />
      <Body />
    </>
  );
}

function mapDispatchToProps( dispatch ) {
  return {
    setUpPlayerData: ( user ) => setUpPlayerData( user, dispatch )
  }
}

export default connect( undefined, mapDispatchToProps )( App );
