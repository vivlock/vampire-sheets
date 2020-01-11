import React from 'react';
import classNames from 'classnames';

import { useStore } from '../../contexts/store';
import { useNav } from '../../contexts/nav';

import VampireIcon from '../VampireIcon/VampireIcon';

const linkClass = 'button is-text';

export default function Sidebar( { className, selectedCharacter, selectCharacter } ) {
  const classes = classNames( 'menu', className );

  const { state } = useStore();
  const { characters } = state;
  
  const { page, setPage } = useNav();

  const handleSelectCharacter = ( character ) => () => {
    selectCharacter( character );
    setPage( 'character' );
  };

  const handleSetPage = ( newPage ) => () => {
    setPage( newPage );
  };

  return (
    <aside className={classes}>
      <p className="menu-label">
        Characters
      </p>
      <ul className="menu-list">
        { characters.map( ( character ) => (
          <CharacterLi
            character={character}
            isSelected={selectedCharacter && character._id === selectedCharacter._id}
            key={`char-sidebar-${character._id}`}
            onClick={handleSelectCharacter( character )}
          />
        ) ) }
        <li>
          <button
            className="button is-primary"
            disabled={page === 'add-character'}
            onClick={handleSetPage( 'add-character' )}
          >
            Add a Character
          </button>
        </li>
      </ul>

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

const CharacterLi = ( { character, isSelected, onClick } ) => {
  const { name, clan } = character;
  const liClass = classNames( { 'is-active': isSelected } );

  return (
    <li className={liClass} onClick={onClick}>
      <button className={linkClass}>
        {/* <VampireIcon clan={clan} /> */}
        <div className="character-name">{name}</div>
      </button>
    </li>
  );
}