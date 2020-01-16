import { combineReducers } from 'redux';

import activePlayer from './player/reducer';
import characters from './characters/reducer';
import players from './players/reducer';

const rootReducers = combineReducers( {
    activePlayer,
    characters,
    players
} );

export default rootReducers;