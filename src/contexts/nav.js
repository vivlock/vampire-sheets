import React, { Component, createContext, useContext } from 'react';

export const PAGES = {
  ADD_CHARACTER: 'add-character',
  CHARACTER: 'character',
  HARPY: 'harpy',
  ADMIN_PLAYERS: 'admin-players',
  ADMIN_CHARACTERS: 'admin-characters',
  CHARACTER_SHEET: 'character-sheet'
};

export const NavContext = createContext();

export const useNav = () => useContext( NavContext );

export class NavProvider extends Component {
  state = {
    page: undefined
  };

  setPage = ( page ) => {
    this.setState( { page } );
  }

  render() {
    const { page } = this.state;
    const { children } = this.props;

    const configObject = {
      page,
      setPage: ( ...p ) => this.setPage( ...p ),
    };

    return (
      <NavContext.Provider value={configObject}>
        {children}
      </NavContext.Provider>
    );
  }
}