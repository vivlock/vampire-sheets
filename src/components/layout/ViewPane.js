import React from 'react';

import AddCharacter from '../Character/AddCharacter';
import Character from '../Character/Character';

export default function ViewPane( { className, isAddCharacter, selectedCharacter, handleCancel } ) {
  return (
    <section className={className}>
      { 
        isAddCharacter &&
          <div className="container">
            <AddCharacter onCancel={handleCancel} />
          </div>
      }
      {
        selectedCharacter &&
          <div className="container">
            <Character character={selectedCharacter} onCancel={handleCancel} />
          </div>
      } 
    </section>
  )
}


