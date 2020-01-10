import React from 'react';
import Dialog from '../../Dialog';

export default function EditPlayer( { player } ) {
  return (
    <Dialog
      title="Edit Player"
      isOpen={player}
      onSubmit
      onCancel
    >
      Name
      Email
      Role
      [ Revoke Access ]
    </Dialog>
  )
}