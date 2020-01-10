import * as PlayerRequests from '../requests/players';
import * as PlayerActions from '../actions/players';

import { fetchCharactersForPlayer } from '../requests/characters';
import { setCharacters } from '../actions/characters';

export function setUpPlayerData( user, dispatch ) {
  PlayerRequests.fetchOrCreatePlayer( user )
    .then( ( player ) => {
      dispatch( PlayerActions.setPlayer( player ) );
      fetchCharactersForPlayer( player )
        .then( ( { data } ) => {
          dispatch( setCharacters( data ) );
        } );
    } );
}

export function fetchPlayers( dispatch ) {
  PlayerRequests.fetchPlayers()
    .then( ( { data } ) => {
      dispatch( PlayerActions.setPlayers( data ) );
    } );
}