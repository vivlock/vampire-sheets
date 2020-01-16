import sendRequest from './request';

export function fetchAllCharacters() {
  return sendRequest( {
    method: "get",
    url: "/characters"
  } );
}

export function fetchCharacter( characterId ) {
  return sendRequest( {
    method: "get",
    url: `/characters/${characterId}`
  } );
}

export function fetchCharactersForPlayer( player ) {
  return sendRequest( {
    method: "get",
    url: "/characters",
    params: {
      q: `{"player": { "_id": "${player._id}" } }`
    }
  } );
}

// POST	https://<dburl>.restdb.io/rest/<collection>
// Create a new document in a collection. Request body is a valid JSON document.
export function createCharacter( payload ) {
  return sendRequest( {
    method: "post",
    url: "/characters",
    data: payload
  } );
}

// PATCH	https://<dburl>.restdb.io/rest/<collection>/ID
// Update one or more properties on a document in a collection. Request body is a valid JSON object.
export function updateCharacter( characterId, payload ) {
  return sendRequest( {
    method: "patch",
    url: `/characters/${characterId}`,
    data: payload
  } );
}

// DELETE	https://<dburl>.restdb.io/rest/<collection>/ID
// Delete a document in a collection.
export function deleteCharacter( characterId ) {
  return sendRequest( {
    method: "delete",
    url: `/characters/${characterId}`
  } );
}