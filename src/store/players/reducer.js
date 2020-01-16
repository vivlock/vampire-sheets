import {
  SET_PLAYERS,
} from './actions';

const initialState = {
  byId: {},

  isPlayerListLoading: false,
  isPlayerLoading: false,

  isSaving: false
};

export default ( state = initialState, action ) => {
  switch( action.type ) {
      case SET_PLAYERS:
        return {
          ...state,
          byId: createPlayersById( action.players )
        };
      
      default:
        return state;
  };
}

function createPlayersById( players ) {
  let byId = {};

  players.forEach( ( player ) => {
    byId[ player._id ] = player;
  } );

  return byId;
}