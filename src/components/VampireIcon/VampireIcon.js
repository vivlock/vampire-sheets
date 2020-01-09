import React from 'react';
import classNames from 'classnames';

import "./VampireIcon.css";

function iconIsValid( icon ) {
  const validIcons = [
    // General Icons
    'camarilla',
    
    // Player Clans
    'brujah',
    'caitiff',
    'gangrel',
    'malkavian',
    'nosferatu',
    'samedi',
    'toreador',
    'tremere',
    'ventrue',

    // Other/NPC Clans
    'assamite',
    'giovanni',
    'lasombra',
    'ministry',
    'ravnos',
    'tzimisce'
  ];

  if ( validIcons.includes( icon ) ) {
    return true;
  }

  return false;
}

export default function VampireIcon( { icon } ) {
  const isValid = iconIsValid( icon );
  const className = classNames( 'game-icon', { [icon]: isValid } );

  return (
    <span className={className} />
  )
}