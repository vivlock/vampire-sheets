import React, { useState } from 'react';
import { connect } from 'react-redux';

import { useNav } from '../../contexts/nav';

import { fetchClans } from '../../helpers/characterHelper';
import { createCharacter } from '../../store/characters/effects';

import './Character.css';

function AddCharacter( { player } ) {
  const { setPage } = useNav();

  const [ character, setCharacter ] = useState( { player: player._id } );

  console.log("character", character);

  const clans = fetchClans( player.role );

  const updateCharacter = ( field ) => ( event ) => {
    setCharacter( {
      ...character,
      [field]: event.target.value
    } );
  }

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
    <div className="container">
      <div className="addCharacterForm">
        <PlayerSelector
          onChange={updateCharacter( 'player' )}
          player={player}
          value={character.player}
        />

        <div className="field">
          <label className="label">Character Name</label>
          <div className="control">
            <input
              className="input"
              type="text"
              onChange={updateCharacter( 'name' )}
              value={character.name}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Clan</label>
          <div className="control">
            <div className="select">
              <select
                onChange={updateCharacter( 'clan' )}
                value={character.clan}
              >
                <option value="">--Select--</option>
                { clans.map( ( clan ) => (
                  <option value={clan.value}>{clan.label}</option>
                ) ) }
              </select>
            </div>
          </div>
        </div>

        <div className="field">
          <label className="label">Title</label>
          <div className="control">
            <input
              className="input"
              onChange={updateCharacter( 'title' )}
              type="text"
              value={character.title}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Archetype</label>
          <div className="control">
            <input
              className="input"
              onChange={updateCharacter( 'archetype' )}
              type="text"
              value={character.archetype}
            />
          </div>
        </div>

        <div className="field is-grouped">
          <p className="control">
            <button
              className="button is-primary"
              disabled={!isValid()}
              onClick={handleSubmit}
            >
              Submit
            </button>
          </p>
          <p className="control">
            <button
              className="button is-light"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}

function PlayerSelector( { player } ) {
  if ( player.role === 'player' ) {
    return (
      <div className="field">
        <label className="label">Player</label>
        <div className="control">
          <select disabled className="input">
            <option value={player._id}>{player.name}</option>
          </select>
        </div>
      </div>
    ); 
  }
  else {
    return (
      <div>Special Searchable Select Box Thingo</div>
    );
  }
}

function mapStateToProps( { activePlayer } ) {
  return {
    player: activePlayer.player
  }
}

function mapDispatchToProps( dispatch ) {
  return {
    createCharacter: ( character, player ) => createCharacter( character, player, dispatch )
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( AddCharacter );