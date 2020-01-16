import * as PlayerRequests from '../../ajax/players';
import * as PlayerActions from './actions';

import { fetchCharactersForPlayer } from '../../ajax/characters';
import { setCharacters } from '../characters/actions';

export function setUpPlayerData( user, dispatch ) {
  return PlayerRequests.fetchOrCreatePlayer( user )
    .then( ( player ) => {
      dispatch( PlayerActions.setPlayer( player ) );
      fetchCharactersForPlayer( player )
        .then( ( { data } ) => {
          dispatch( setCharacters( data ) );
        } );
    } );
}