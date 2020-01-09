import React from 'react';
import classNames from 'classnames';

import { useStore } from '../../contexts/store';

import VampireIcon from '../VampireIcon/VampireIcon';

export default function Sidebar( { className, toggleAddCharacter, isAddCharacter, selectedCharacter, selectCharacter } ) {
  const classes = classNames( 'menu', className );
  
  const { state } = useStore();
  const { characters } = state;

  const handleSelectCharacter = ( character ) => () => {
    selectCharacter( character );
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
            onClick={handleSelectCharacter( character )}
          />
        ) ) }
        <li>
          <button
            disabled={isAddCharacter}
            className="button"
            onClick={toggleAddCharacter}
          >
            Add a Character
          </button>
        </li>
      </ul>
      <p className="menu-label">
        Administration
      </p>
      <ul className="menu-list">
        <li>Team Settings</li>
        <li>
          <span className="is-active">Manage Your Team</span>
          <ul>
            <li>Members</li>
            <li>Plugins</li>
            <li>Add a member</li>
          </ul>
        </li>
        <li>Invitations</li>
        <li>Cloud Storage Environment Settings</li>
        <li>Authentication</li>
      </ul>
    </aside>
  );
}

const CharacterLi = ( { character, isSelected, onClick } ) => {
  const { name, clan } = character;
  const liClass = classNames( { 'is-active': isSelected } );

  return (
    <li className={liClass} onClick={onClick}>
      <VampireIcon clan={clan} /><div className="character-name">{name}</div>
    </li>
  );
}