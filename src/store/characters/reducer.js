import * as Helper from './helper';

import {
  SET_CHARACTERS,
  SELECT_CHARACTER,
  SET_CHARACTER_SHEETS_FOR_ID,
} from './actions';


const initialState = {
  byId: {},
  sheetsByCharacterId: {},

  selectedCharacter: undefined,
  selectedSheet: undefined,

  isCharacterListLoading: false,
  isCharacterLoading: false,
};

export default ( state = initialState, action ) => {
  switch( action.type ) {
    case SET_CHARACTERS:
      return {
        ...state,
        byId: Helper.createCharactersById( action.characters )
      };
    
    case SELECT_CHARACTER:
      return {
        ...state,
        selectedCharacter: action.character
      };

    case SET_CHARACTER_SHEETS_FOR_ID:
      return {
        ...state,
        sheetsByCharacterId: {
          ...state.sheetsByCharacterId,
          [action.id]: action.characterSheets
        }
      };
    
    default:
      return state;
  };
}