export const SET_PLAYERS = "SET PLAYERS";

export function setPlayers( players ) {
  return {
    type: SET_PLAYERS,
    players
  }
}