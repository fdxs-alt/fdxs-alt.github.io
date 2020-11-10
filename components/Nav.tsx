import React from 'react';
import { Button, SpaceBetweenContainer } from '../styles/BasicComponents';
import { Navbar, Logo, MenuBar, MenuItem, MenuLink } from '../styles/Main';
const Nav = () => {
  const l = typeof window !== 'undefined' && location;

  return (
    <Navbar>
      <Logo />
      <SpaceBetweenContainer>
        <Button primary>Zostań Gladiatorem JS</Button>
        <MenuBar>
          <MenuItem>
            <MenuLink to="/" location={l ? l.pathname : ''}>
              Strona główna
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/about" location={l ? l.pathname : ''}>
              O mnie
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/blog" location={l ? l.pathname : ''}>
              Blog
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/contact" location={l ? l.pathname : ''}>
              Kontakt
            </MenuLink>
          </MenuItem>
        </MenuBar>
      </SpaceBetweenContainer>
    </Navbar>
  );
};

export default Nav;
