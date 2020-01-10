import React, { useState } from 'react';

import Sidebar from './Sidebar.js';
import ViewPane from './ViewPane.js';

function Body() {
  const [ page, setPage ] = useState();
  const [ selectedCharacter, setSelectedCharacter ] = useState();

  return (
    <div className="columns">
      <Sidebar
        className="column is-one-fifth"
        page={page}
        setPage={setPage}
        selectCharacter={setSelectedCharacter}
        selectedCharacter={selectedCharacter}
      />
      <ViewPane
        className="section column"
        page={page}
        setPage={setPage}
        selectCharacter={setSelectedCharacter}
        selectedCharacter={selectedCharacter}
      />
    </div>
  )
}

export default Body;