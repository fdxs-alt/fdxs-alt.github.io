import React from 'react';
import { Button, SpaceBetweenContainer } from '../styles/BasicComponents';
import { Navbar, Logo, MenuBar, MenuItem, MenuLink } from '../styles/Main';
const Nav = () => {
  return (
    <Navbar>
      <Logo />
      <SpaceBetweenContainer>
        <Button primary>Zostań Gladiatorem JS</Button>
        <MenuBar>
          <MenuItem>
            <MenuLink to="/">Strona główna</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/about">O mnie</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/blog">Blog</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/contact">Kontakt</MenuLink>
          </MenuItem>
        </MenuBar>
      </SpaceBetweenContainer>
    </Navbar>
  );
};

export default Nav;
