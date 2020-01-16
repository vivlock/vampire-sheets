import React from 'react';
import classNames from 'classnames';

import CharacterList from './CharacterList';

import { useNav } from '../../../contexts/nav';

import './Sidebar.css';

export default function Sidebar( { className } ) {
  const classes = classNames( 'menu', className );
  const linkClass = 'button is-text';

  const { page, setPage } = useNav();

  const handleSetPage = ( newPage ) => () => {
    setPage( newPage );
  };

  return (
    <aside className={classes}>
      <CharacterList />

      <p className="menu-label">
        Tools
      </p>
      <ul className="menu-list">
        <li>
          <button
            className={linkClass}
            onClick={handleSetPage( 'harpy' )}
          >
            Harpy Status Tracker
          </button>
        </li>
      </ul>

      <p className="menu-label">
        Admin
      </p>
      <ul className="menu-list">
        <li>
          <button
            className={linkClass}
            onClick={handleSetPage( 'admin-players' )}
          >
            Manage Players
          </button>
        </li>
        <li>
          <button
            className={linkClass}
            onClick={handleSetPage( 'admin-characters' )}
          >
            Manage Characters
          </button>
        </li>
      </ul>
    </aside>
  );
}

