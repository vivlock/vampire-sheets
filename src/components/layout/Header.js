import React from 'react';
import { useAuth0 } from '../../contexts/auth0-context';

import {
  Alignment,
  Button,
  Classes,
  Navbar,
} from "@blueprintjs/core";

import './Header.css'

export default function Header() {
  const { isLoading, user, loginWithRedirect, logout } = useAuth0();

  return (
    <Navbar>
      <Navbar.Group align={Alignment.LEFT}>
        <Navbar.Heading>Coterie of the Crimson Shadow</Navbar.Heading>
      </Navbar.Group>
      <Navbar.Group align={Alignment.RIGHT}>
        {!isLoading && !user && (
          <Button className={Classes.MINIMAL}
            text="Login"
            onClick={loginWithRedirect}
          />
        ) }
        {!isLoading && user && (
          <>
            <Navbar.Heading>Welcome back, {user.name}!</Navbar.Heading>
            <Button
              className={Classes.MINIMAL}
              text="Logout"
              onClick={() => logout( { returnTo: window.location.origin } )}
            />
          </>
        ) }
      </Navbar.Group>
    </Navbar>
  );
}