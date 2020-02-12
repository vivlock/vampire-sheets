import React from 'react';
import { Classes, Menu } from "@blueprintjs/core";

import CharacterList from './CharacterList';

import { useNav } from '../../../contexts/nav';

import './Sidebar.css';

export default function Sidebar( { className } ) {
  const { page, setPage } = useNav();

  const handleSetPage = ( newPage ) => () => {
    setPage( newPage );
  };

  return (
    <Menu className="sidebar">
      <CharacterList />

      <Menu.Divider title="Tools" />
      <Menu.Item
        text="Harpy Status Tracker"
        onClick={handleSetPage( 'harpy' )}
      />

      <Menu.Divider title="Admin" />
      <Menu.Item
        text="Manage Players"
        onClick={handleSetPage( 'admin-players' )}
      />
      <Menu.Item
        text="Manage Characters"
        onClick={handleSetPage( 'admin-characters' )}
      />
    </Menu>
  );
}

