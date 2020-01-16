import React, { useState } from 'react';
import { connect } from 'react-redux';

import CharacterSheet from '../CharacterSheet/CharacterSheet';

import { fetchCharacterSheets } from '../../store/characters/effects';

function Character( { selectedCharacter, characterSheets } ) {
  const [activeSheet, setActiveSheet] = useState();

  if( !selectedCharacter ) {
    return null;
  }

  if( !characterSheets ) {
    fetchCharacterSheets( selectedCharacter );
    return <div>Loading...</div>;
  }

  if( characterSheets.length === 0 ) {
    return (
      <button className='button is-primary'>Create Character Sheet</button>
    )
  }

  return (
    <>
      <CharacterSheetStatusTable sheets={characterSheets} selectSheet={setActiveSheet} />
      <CharacterSheet characterSheet={activeSheet}/>
    </>
  )
  
}

function CharacterSheetStatusTable( { sheets, selectSheet } ) {
  return (
    <table className='table'>
      <thead>
        <tr>
          <th>Version</th>
          <th>Status</th>
          <th>Last Updated</th>
          <th>Last Updated By</th>
        </tr>
      </thead>
      <tbody>
        { sheets.map( ( sheet ) => {
          return (
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          )
        } ) }
      </tbody>
    </table>
  )
}

function mapStateToProps( { characters } ) {
  const { selectedCharacter, sheetsByCharacterId } = characters;

  return {
    characterSheets: sheetsByCharacterId[ selectedCharacter._id ],
    selectedCharacter
  }
}

function mapDispatchToProps( dispatch ) {
  return {
    fetchCharacterSheets:( selectedCharacter ) => fetchCharacterSheets( selectedCharacter, dispatch )
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( Character );