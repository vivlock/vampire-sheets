import React from 'react';

import AddCharacter from '../Character/AddCharacter';
import Character from '../Character/Character';

export const PAGES = {
  ADD_CHARACTER: 'add-character',
  CHARACTER: 'character',
  HARPY: 'harpy',
  ADMIN_PLAYERS: 'admin-players',
  ADMIN_CHARACTERS: 'admin-characters',
  CHARACTER_SHEET: 'character-sheet'
};

export default function ViewPane( { className, page, setPage, selectedCharacter } ) {

  const content = getPageContent( page, selectedCharacter, setPage );

  return (
    <section className={className}>
      <div className='container'>
        { content }
      </div>
    </section>
  )
}

function getPageContent( page, selectedCharacter, setPage ) {
  switch( page ) {
    case PAGES.ADD_CHARACTER:
      return (
        <AddCharacter setPage={setPage} />
      );

    case PAGES.CHARACTER:
      return selectedCharacter ? (
        <Character character={selectedCharacter} setPage={setPage} />
      ) : null;

    case PAGES.HARPY:
      return (
        <span>Harpy Status Tracker</span>
      );

    case PAGES.ADMIN_PLAYERS:
      return (
        <span>Manage Players</span>
      );

    case PAGES.ADMIN_CHARACTERS:
      return (
        <span>Manage Characters</span>
      );

    default:
      return null;
  }
}


