import React from 'react';
import { connect } from 'react-redux';

import { Spinner, Menu } from "@blueprintjs/core";

import { useNav } from '../../../contexts/nav';
import { selectCharacter } from '../../../store/characters/actions';

function CharacterList( { characters, selectedCharacter, isLoading, onSelectCharacter } ) {
  const { page, setPage } = useNav();

  const handleSetPage = ( newPage ) => () => {
    setPage( newPage );
  };

  const handleSelectCharacter = ( character ) => () => {
    onSelectCharacter( character );
    setPage( 'character' );
  };

  if( isLoading ) {
    return (
      <Spinner />
    );
  }

  return (
    <>
      <Menu.Divider title="Characters" />
      { characters.map( ( character ) => (
        <Menu.Item
          active={selectedCharacter && character._id === selectedCharacter._id}
          key={`char-sidebar-${character._id}`}
          text={character.name}
          onClick={handleSelectCharacter( character )}
        />
      ) ) }
      <Menu.Item
        text="Add a Character"
        onClick={handleSetPage( 'add-character' )}
        disabled={page === 'add-character'}
      />
    </>
  );
}

function mapStateToProps( { characters } ) {
  const { byId, selectedCharacter, isCharacterListLoading } = characters;

  return {
    characters: Object.keys( byId ).map( id => byId[ id ] ),
    selectedCharacter,
    isLoading: isCharacterListLoading
  }
}

function mapDispatchToProps( dispatch ) {
  return {
    onSelectCharacter: ( character ) => dispatch( selectCharacter( character ) )
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( CharacterList );