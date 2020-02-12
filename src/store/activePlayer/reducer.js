import {
  SET_PLAYER,
  PLAYER_IS_LOADING,
} from './actions';

// TODO: remove mock data
// current mock is valid data copied from the database
const initialState = {
  player: {
    "_id": "5e0fb700688c775700022a8e",
    "email": "sarliz.johnst@gmail.com",
    "role": "player",
    "name": "Sarah"
  },

  isLoading: false,
  isSaving: false,
};

export default ( state = initialState, action ) => {
  switch( action.type ) {
      case SET_PLAYER:
        return {
          ...state,
          player: action.player
        };
      
      case PLAYER_IS_LOADING:
        return {
          ...state,
          isLoading: action.isLoading
        }
      
      default:
        return state;
  };
}

