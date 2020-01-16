import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import { useNav } from '../../../contexts/nav';

import { selectCharacter } from '../../../store/characters/actions';

import VampireIcon from '../../VampireIcon/VampireIcon'

function CharacterList( { characters, selectedCharacter, isLoading, onSelectCharacter } ) {
  const { page, setPage } = useNav();

  const handleSetPage = ( newPage ) => () => {
    setPage( newPage );
  };

  const handleSelectCharacter = ( character ) => () => {
    onSelectCharacter( character );
    setPage( 'character' );
  };

  return (
    <div>
      <p className="menu-label">
        Characters
      </p>
      <ul className="menu-list character-list">
        { characters.map( ( character ) => (
          <CharacterLi
            character={character}
            isSelected={selectedCharacter && character._id === selectedCharacter._id}
            key={`char-sidebar-${character._id}`}
            onClick={handleSelectCharacter( character )}
          />
        ) ) }
        <li className='add-character'>
          <button
            className="button is-primary"
            disabled={page === 'add-character'}
            onClick={handleSetPage( 'add-character' )}
          >
            Add a Character
          </button>
        </li>
      </ul>
    </div>
  );
}

const CharacterLi = ( { character, isSelected, onClick } ) => {
  const { name, clan } = character;

  const liClass = classNames( { 'is-active': isSelected } );
  const linkClass = 'button is-text';

  return (
    <li className={liClass} onClick={onClick}>
      <button className={linkClass}>
        {/* <VampireIcon clan={clan} /> */}
        <div className="character-name">{name}</div>
      </button>
    </li>
  );
};

function mapStateToProps( { characters } ) {
  const { byId, selectedCharacter, isLoading } = characters;

  return {
    characters: Object.keys( byId ).map( id => byId[ id ] ),
    selectedCharacter,
    isLoading
  }
}

function mapDispatchToProps( dispatch ) {
  return {
    onSelectCharacter: ( character ) => dispatch( selectCharacter( character ) )
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( CharacterList );