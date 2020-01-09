import React, { useState } from 'react';

import Sidebar from './Sidebar.js';
import ViewPane from './ViewPane.js';

function Body() {
  const [ isAddCharacter, setAddCharacter ] = useState( false );
  const [ selectedCharacter, setSelectedCharacter ] = useState();

  const toggleAddCharacter = () => {
    setAddCharacter( !isAddCharacter );
  };

  const selectCharacter = ( character ) => {
    setSelectedCharacter( character );
  };

  const handleCancel = () => {
    setAddCharacter( false );
    setSelectedCharacter( undefined );
  }

  return (
    <div className="columns">
      <Sidebar
        isAddCharacter={isAddCharacter}
        className="column is-one-fifth"
        selectCharacter={selectCharacter}
        selectedCharacter={selectedCharacter}
        toggleAddCharacter={toggleAddCharacter}
      />
      <ViewPane
        isAddCharacter={isAddCharacter}
        className="section column"
        handleCancel={handleCancel}
        selectedCharacter={selectedCharacter}
      />
    </div>
  )
}

export default Body;