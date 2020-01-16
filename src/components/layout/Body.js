import React, { useState } from 'react';

import Sidebar from './Sidebar/Sidebar';
import ViewPane from './ViewPane';

function Body() {
  return (
    <div className="columns">
      <Sidebar
        className="column is-one-fifth"
      />
      <ViewPane
        className="section column"
      />
    </div>
  )
}

export default Body;