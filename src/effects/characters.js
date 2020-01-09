import { ROLES } from "../helpers/playerHelper.js";
import * as CharacterRequest from "../requests/characters";
import { setCharacters } from "../actions/characters";

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
    .then( () => {
      loadCharacters( player, dispatch );
    } );
}