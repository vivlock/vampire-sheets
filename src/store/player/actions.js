export const SET_PLAYER = "SET PLAYER";

export function setPlayer( player ) {
  return {
    type: SET_PLAYER,
    player
  }
}