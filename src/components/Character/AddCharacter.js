import React, { useState } from 'react';
import { connect } from 'react-redux';

import { FormGroup, Button, Intent } from "@blueprintjs/core";

import Input from "../UI/FormControl/Input/Input";
import Select from "../UI/FormControl/Select/Select";

import { useNav } from '../../contexts/nav';
import { fetchClans } from '../../helpers/characterHelper';
import { createCharacter } from '../../store/characters/effects';

import './Character.css';

function AddCharacter( { player, players } ) {
  const { setPage } = useNav();
  
  const clans = fetchClans( player.role );

  const [ character, setCharacter ] = useState( {
    player: { label: player.name, value: player._id }
  } );

  const updateCharacter = ( field ) => ( event ) => {
    setCharacter( {
      ...character,
      [field]: event.target.value
    } );
  }

  const updateCharacterSelect = ( field ) => ( value ) => {
    setCharacter( {
      ...character,
      [field]: value
    } )
  }
  
  console.log("character", character);

  const handleSubmit = () => {
    // setLoadSpinner( true );
    createCharacter( character, player )
      .then( ( data ) => {
        console.log('createCharacter callback', data);
      } )
      .catch( ( error ) => {
        console.error( "Whoops, something borked", error );
      } )
      .finally( () => {
        // setLoadSpinner( false );
      });
  }

  const handleCancel = () => {
    setPage();
  }

  const isValid = () => {
    return (
      character.player &&
      character.name &&
      character.clan
    );
  }

  return (
    <div className="addCharacterForm">
      <Select
        disabled={player.role === 'player'}
        isSearchable={player.role !== 'player'}
        label="Player"
        onChange={updateCharacterSelect( 'player' )}
        options={players}
        required
        value={character.player}
      />

      <Input
        inputId="name"
        label="Character Name"
        onChange={updateCharacter( 'name' )}
        required
        value={character.name}
      />

      <Select
        label="Clan"
        onChange={updateCharacterSelect( 'clan' )}
        options={clans}
        required
        value={character.clan}
      />

      <Input
        inputId="title"
        label="Title"
        onChange={updateCharacter( 'title' )}
        value={character.title}
      />

      <Input
        inputId="archetype"
        label="Archetype"
        onChange={updateCharacter( 'archetype' )}
        value={character.archetype}
      />

      <FormGroup>
        <Button
          //disabled={!isValid()}
          intent={Intent.PRIMARY}
          onClick={handleSubmit}
        >
          Submit
        </Button>
        <Button
          onClick={handleCancel}
        >
          Cancel
        </Button>
      </FormGroup>
    </div>
  )
}

function buildPlayerOptions( player, players ) {
  if( player.role === 'player' ) {
    return [ {
      label: player.name,
      value: player._id
    } ]
  }

  return Object.keys( players.byId ).map( ( id ) => {
    return {
      label: players[ id ].name,
      value: id
    };
  } ).sort( ( a, b ) => {
    return a.label.localeCompare( b.label );
  } );
}

function mapStateToProps( { activePlayer, players } ) {
  const player = activePlayer.player;

  return {
    player,
    players: buildPlayerOptions( player, players )
  }
}

function mapDispatchToProps( dispatch ) {
  return {
    createCharacter: ( character, player ) => createCharacter( character, player, dispatch )
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( AddCharacter );
