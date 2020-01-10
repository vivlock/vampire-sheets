export const SET_PLAYER = "SET PLAYER";
export const SET_PLAYERS = "SET PLAYERS";

export function setPlayer( player ) {
  return {
    type: SET_PLAYER,
    player
  }
}

export function setPlayers( players ) {
  return {
    type: SET_PLAYERS,
    players
  }
}