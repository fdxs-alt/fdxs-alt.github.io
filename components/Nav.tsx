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
            <MenuLink to="/" location={location.pathname}>
              Strona główna
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/about" location={location.pathname}>
              O mnie
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/blog" location={location.pathname}>
              Blog
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/contact" location={location.pathname}>
              Kontakt
            </MenuLink>
          </MenuItem>
        </MenuBar>
      </SpaceBetweenContainer>
    </Navbar>
  );
};

export default Nav;
