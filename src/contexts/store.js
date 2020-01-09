import React, { createContext, useReducer, useContext } from 'react';

import {
  SET_CHARACTERS
} from '../actions/characters';

import {
  SET_PLAYER
} from '../actions/players';


const initialState = {
  // TODO, remove mock data
  // player: undefined,
  player: {
    _id: 123,
    role: 'player',
    name: 'Sarah',
    // role: 'admin',
    // role: 'mod',
  },
  // characters: [],
  characters: [
    {
      _id: 1,
      name: 'Kestrel',
      clan: 'tremere'
    }
  ],
  selectedCharacter: {}
};

const store = createContext( initialState );
const { Provider } = store;

export const useStore = () => useContext( store );

export const StateProvider = ( { children } ) => {
  const [state, dispatch] = useReducer( ( state, action ) => {
    switch(action.type) {
      case SET_PLAYER:
        return {
          ...state,
          player: action.player
        };
      
      case SET_CHARACTERS:
        return {
          ...state,
          characters: action.characters
        };
      
      default:
        return state;
    };
  }, initialState );

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};
