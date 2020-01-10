import React from 'react';
import { useStore } from '../../contexts/store';

import EditPlayer from './EditPlayer';

export default function Players() {
  const { state, dispatch } = useStore();
  const { players } = state;

  const [ editingPlayer, setEditingPlayer ] = useStore();

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
