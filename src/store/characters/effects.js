import { ROLES } from "../../helpers/playerHelper.js";

import * as CharacterSheetRequests from '../../ajax/characterSheets'
import * as CharacterRequest from "../../ajax/characters";

import { setCharacters, selectCharacter, setCharacterSheetsForId } from "./actions";

export function loadCharacters( player, dispatch ) {
  if( player.role === ROLES.PLAYER ) {
    return CharacterRequest.fetchCharactersForPlayer( player )
      .then( ( { data } ) => {
        dispatch( setCharacters( data ) );
      } );
  }
  else {
    return CharacterRequest.fetchAllCharacters()
      .then( ( { data } ) => {
        dispatch( setCharacters( data ) );
      } );
  }
}

export function createCharacter( character, player, dispatch ) {
  return CharacterRequest.createCharacter( character )
    .then( ( character ) => {
      loadCharacters( player, dispatch );
      dispatch( selectCharacter( character ) );
    } );
}


export function fetchCharacterSheets( selectedCharacter, dispatch ) {
  //dispatch( mainPanelLoading( true ) );
  CharacterSheetRequests.fetchCharacterSheets( selectedCharacter )
    .then( ( { data } ) => {
      dispatch( setCharacterSheetsForId( selectedCharacter._id, data ) );
    } )
    .finally( () => {
      //dispatch( mainPanelLoading( false ) );
    } )
}