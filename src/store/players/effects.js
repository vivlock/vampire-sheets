import * as PlayerRequests from '../../ajax/players'
import * as PlayerActions from './actions';

export function fetchPlayers( dispatch ) {
  return PlayerRequests.fetchPlayers()
    .then( ( { data } ) => {
      dispatch( PlayerActions.setPlayers( data ) );
    } );
}