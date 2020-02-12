export const SET_PLAYER = "SET PLAYER";
export const PLAYER_IS_LOADING = "ACTIVE PLAYER IS LOADING";

export function setPlayer( player ) {
  return {
    type: SET_PLAYER,
    player
  }
}

export function setPlayerIsLoading( isLoading ) {
  return {
    type: PLAYER_IS_LOADING,
    isLoading
  }
}