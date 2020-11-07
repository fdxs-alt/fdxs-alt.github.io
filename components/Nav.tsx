import { graphql, Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import logo from "../static/image_1.svg"
import { Button, SpaceBetweenContainer } from "../styles/BasicComponents"

interface IMenuLink {
  to: string
  location: string
}

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
  align-items: center;
`

const Logo = styled(logo)`
  width: 60px;
  height: 60px;
`
const MenuBar = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
`
const MenuItem = styled.li`
  padding: 8px 12px;
`

const MenuLink = styled(Link)<IMenuLink>`
  text-decoration: ${props =>
    props.location === props.to ? "underline" : "none"};
  color: ${props => props.theme.colors.grey_1};
  font-weight: 700;
  transition: 200ms ease;

  &:focus,
  :hover {
    color: ${props => props.theme.colors.secondary};
  }
`

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
  )
}

export default Nav
