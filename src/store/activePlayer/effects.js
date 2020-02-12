import * as PlayerRequests from '../../ajax/players';
import * as PlayerActions from './actions';

import { fetchCharactersForPlayer } from '../../ajax/characters';
import { setCharacters, setCharacterListIsLoading } from '../characters/actions';

export function setUpPlayerData( user, dispatch ) {
  dispatch( PlayerActions.setPlayerIsLoading( true ) );
  dispatch( setCharacterListIsLoading( true ) );

  return PlayerRequests.fetchOrCreatePlayer( user )
    .then( ( player ) => {
      dispatch( PlayerActions.setPlayer( player ) );
      dispatch( PlayerActions.setPlayerIsLoading( false ) );
      fetchCharactersForPlayer( player )
        .then( ( { data } ) => {
          dispatch( setCharacters( data ) );
          dispatch( setCharacterListIsLoading( false ) );
        } );
    } );
}