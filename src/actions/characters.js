export const SET_CHARACTERS = "SET CHARACTERS";

export function setCharacters( characters ) {
  return {
    type: SET_CHARACTERS,
    characters
  }
}