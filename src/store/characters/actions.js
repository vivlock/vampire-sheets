export const SET_CHARACTERS = "SET CHARACTERS";
export const SELECT_CHARACTER = "SELECT CHARACTER";
export const SET_CHARACTER_SHEETS_FOR_ID = "SET CHARACTER SHEETS FOR ID";

export function setCharacters( characters ) {
  return {
    type: SET_CHARACTERS,
    characters
  }
}

export function selectCharacter( character ) {
  return {
    type: SELECT_CHARACTER,
    character
  }
}

export function setCharacterSheetsForId( id, characterSheets ) {
  return {
    type: SET_CHARACTER_SHEETS_FOR_ID,
    id,
    characterSheets
  };
}