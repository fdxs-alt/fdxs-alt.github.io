import React, { useEffect, useState } from 'react';
import useMediaQuery from '../utils/useMediaQuery';
import { Button, SpaceBetweenContainer } from '../styles/BasicComponents';
import {
  Navbar,
  MenuBar,
  MenuItem,
  MenuLink,
  OpenButton,
  Logo as MenuLogo,
} from '../styles/Main';
import Menu from '../../images/icons/ic_baseline-menu.svg';
import Modal from '../utils/Modal';
import styled from 'styled-components';
import { Logo } from '../styles/Home/DemoComponent';

const LinksContainerColumn = styled.div`
  width: 100%;
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Nav = () => {
  const [open, setOpen] = useState(false);
  const l = typeof window !== 'undefined' && location;
  const isTablet = useMediaQuery('(max-width: 900px)');

  useEffect(() => {
    if (!isTablet) {
      setOpen(false);
    }
    return () => {
      setOpen(false);
    };
  }, [isTablet]);

  return (
    <Navbar>
      <MenuLogo />
      {isTablet ? (
        open ? (
          <Modal>
            <LinksContainerColumn>
              <OpenButton
                onClick={() => setOpen((prev) => !prev)}
                style={{ alignSelf: 'flex-end', justifySelf: 'flex-start' }}
              >
                X
              </OpenButton>
              <Logo />
              <MenuLink to="/" location={l ? l.pathname : ''}>
                Strona główna
              </MenuLink>
              <MenuLink to="/about" location={l ? l.pathname : ''}>
                O mnie
              </MenuLink>
              <MenuLink to="/blog" location={l ? l.pathname : ''}>
                Blog
              </MenuLink>
              <MenuLink
                to="/contact"
                location={l ? l.pathname : ''}
                style={{ marginBottom: '1em' }}
              >
                Kontakt
              </MenuLink>
              <Button primary>Zostań Gladiatorem JS</Button>
            </LinksContainerColumn>
          </Modal>
        ) : (
          <OpenButton onClick={() => setOpen((prev) => !prev)}>
            <Menu />
          </OpenButton>
        )
      ) : (
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
      )}
    </Navbar>
  );
};

export default Nav;
