import React, { useState } from 'react';

import Sidebar from './Sidebar/Sidebar';
import ViewPane from './ViewPane';

import "./Body.css";

function Body() {
  return (
    <div className="main">
      <Sidebar />
      <ViewPane />
    </div>
  )
}

export default Body;