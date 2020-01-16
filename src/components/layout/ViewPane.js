import React from 'react';
import { connect } from 'react-redux';

import AddCharacter from '../Character/AddCharacter';
import Character from '../Character/Character';

import { PAGES, useNav } from '../../contexts/nav';

function ViewPane( { className, selectedCharacter } ) {
  const { page } = useNav();

  const getPageContent = () => {
    switch( page ) {
      case PAGES.ADD_CHARACTER:
        return (
          <AddCharacter />
        );
  
      case PAGES.CHARACTER:
        return selectedCharacter ? (
          <Character character={selectedCharacter} />
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

  const content = getPageContent();

  return (
    <section className={className}>
      <div className='container'>
        { content }
      </div>
    </section>
  )
}

function mapStateToProps( { characters } ) {
  const { selectedCharacter } = characters;

  return {
    selectedCharacter
  };
}

export default connect( mapStateToProps )( ViewPane );




