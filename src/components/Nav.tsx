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
import { motion } from 'framer-motion';

const LinksContainerColumn = styled(motion.ul)`
  width: 100%;
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  list-style: none;
`;

const MenuButton = styled(Button)`
  font-size: 14px;
`;

const variants = {
  initial: { y: '-100%', opacity: 0 },
  animation: { y: '0', opacity: 1 },
  initial_2: { y: '100%', opacity: 0 },
};

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
          <Modal isOpen={open}>
            <LinksContainerColumn>
              <OpenButton
                onClick={() => setOpen((prev) => !prev)}
                style={{ alignSelf: 'flex-end', justifySelf: 'flex-start' }}
              >
                X
              </OpenButton>
              <MenuItem
                variants={variants}
                initial="initial"
                animate="animation"
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                <MenuLink to="/" location={l ? l.pathname : ''}>
                  Strona główna
                </MenuLink>
              </MenuItem>
              <MenuItem
                variants={variants}
                initial="initial"
                animate="animation"
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                <MenuLink to="/about" location={l ? l.pathname : ''}>
                  O mnie
                </MenuLink>
              </MenuItem>
              <MenuItem
                variants={variants}
                initial="initial_2"
                animate="animation"
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                <MenuLink to="/blog" location={l ? l.pathname : ''}>
                  Blog
                </MenuLink>
              </MenuItem>
              <MenuItem
                variants={variants}
                initial="initial_2"
                animate="animation"
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                <MenuLink
                  to="/contact"
                  location={l ? l.pathname : ''}
                  style={{ marginBottom: '2em' }}
                >
                  Kontakt
                </MenuLink>
              </MenuItem>
              <MenuButton
                primary
                variants={variants}
                initial="initial_2"
                animate="animation"
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                Zostań Gladiatorem JS
              </MenuButton>
            </LinksContainerColumn>
          </Modal>
        ) : (
          <OpenButton
            onClick={() => setOpen((prev) => !prev)}
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: '0' }}
            transition={{
              type: 'spring',
              stiffness: 90,
              duration: 0.2,
              damping: 15,
            }}
          >
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
