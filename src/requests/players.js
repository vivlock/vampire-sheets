import sendRequest from './request';

export function fetchOrCreatePlayer( user ) {
  return new Promise( ( resolve, reject ) => {
    fetchPlayer( user )
    .then( ( { data } ) => {
      if( data.length ) {
        resolve( data[0] );
      }
      else {
        createPlayer( user )
          .then( ( { data } ) => {
            resolve( data[0] );
          } )
          .catch( ( welp ) => {
            console.error( 'We dun goofed', welp );
            reject( welp );
          } );
      }
    } )
    .catch( ( error ) => {
      console.error( "This isn't where I parked my car", error );
      reject( error );
    } )
  } );
}

export function fetchPlayer( user ) {
  return sendRequest( {
    method: "get",
    url: "/players",
    params: {
      q: `{"email": "${user.email}"}`
    }
  } );
}

export function createPlayer( user ) {
  return sendRequest( {
    method: "post",
    url: "/players",
    data: {
      email: user.email,
      role: 'player'
    }
  } );
}

export function fetchPlayers() {
  return sendRequest( {
    method: "get",
    url: "/players"
  } );
}
