import React, { useState } from 'react';
import { connect } from 'react-redux';

import EditPlayer from './EditPlayer';

function Players( { players } ) {
  const [ editingPlayer, setEditingPlayer ] = useState();

  const editPlayer = ( player ) => {
    setEditingPlayer( player );
  };

  return (
    <div className='container'>
      <table className='table is-fullwidth is-hoverable is-striped'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            players.map( ( player ) => <PlayerRow player={player} />)
          }
        </tbody>
      </table>
      <EditPlayer player={editingPlayer} />
    </div>
  )
}

function PlayerRow( { player } ) {
  return (
    <tr>
      <td>{player.name}</td>
      <td>{player.email}</td>
      <td>{player.role}</td>
      <td>
        Edit Details
        Manage Characters
        Revoke Access
      </td>
    </tr>
  )
}

function mapStateToProps( { players } ) {
  return {
    players: Object.keys( players.byId ).map( ( id ) => players.byId[id] )
  }
}

function mapDispatchToProps( dispatch ) {
  return {
    fetchPlayers: () => {}
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( Players );
