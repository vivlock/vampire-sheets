import sendRequest from './request';

export function fetchCharacterSheets( character ) {
  return sendRequest( {
    method: "get",
    url: "/character-sheets",
    params: {
      q: `{"character": { "_id": "${character._id}" } }`
    }
  } );
}