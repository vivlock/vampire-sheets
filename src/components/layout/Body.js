import React, { useState } from 'react';

import { useNav } from '../../contexts/nav';

import Sidebar from './Sidebar.js';
import ViewPane from './ViewPane.js';

function Body() {
  const [ selectedCharacter, setSelectedCharacter ] = useState();

  return (
    <div className="columns">
      <Sidebar
        className="column is-one-fifth"
        selectCharacter={setSelectedCharacter}
        selectedCharacter={selectedCharacter}
      />
      <ViewPane
        className="section column"
        selectCharacter={setSelectedCharacter}
        selectedCharacter={selectedCharacter}
      />
    </div>
  )
}

export default Body;