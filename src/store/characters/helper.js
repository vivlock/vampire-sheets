export function createCharactersById( characters ) {
  const byId = {};

  characters.forEach( ( character ) => byId[ character._id ] = character );

  return byId;
}
