import React from 'react';
import styled from 'styled-components';
import { SpaceBetweenContainer } from '../styles/BasicComponents';
import Logo from '../../images/png/image_8.png';
import { Link } from 'gatsby';
import FacebookLink from './FacebookLink';
import GitLink from './GitLink';
import size from '../utils/size';
const LayoutFooter = styled.footer`
  width: 100%;
  background-color: ${(props) => props.theme.colors.grey_1};
`;
const FooterContainer = styled.div`
  width: 55%;
  padding-bottom: 50px;
  padding-top: 70px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${size.tablet}) {
    width: 80%;
  }

  @media (max-width: ${size.small}) {
    width: 90%;
    justify-content: center;
  }
`;

const Container = styled(SpaceBetweenContainer)`
  width: 55%;

  @media (max-width: ${size.small}) {
    flex-direction: column-reverse;
  }
`;

const LinksWrapper = styled(SpaceBetweenContainer)`
  width: 15%;
  align-items: center;
  @media (max-width: ${size.small}) {
    width: 30%;
  }
`;

const MainLogo = styled.img`
  width: 100px;
  height: 100px;

  @media (max-width: ${size.small}) {
    width: 50px;
    height: 50px;
  }
`;

const FooterLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.white};
  padding: 0.6rem 0;
  margin-bottom: 6px 0;
  transition: 200ms ease;
  outline: none;
  &:focus,
  :hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;

const LogoWraper = styled(SpaceBetweenContainer)`
  width: 40%;

  @media (max-width: ${size.small}) {
    flex-direction: column;
  }
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CopyrightTitle = styled.p`
  font-size: 12px;
  align-self: center;
  padding: 1rem;
  text-align: center;
  color: ${(props) => props.theme.colors.white};
`;
const Footer = () => {
  return (
    <LayoutFooter>
      <FooterContainer>
        <LogoWraper>
          <MainLogo src={Logo} alt="logo" />
          <ColumnContainer>
            <FooterLink to="/">Strona główna</FooterLink>
            <FooterLink to="/">O mnie</FooterLink>
            <FooterLink to="/">Kontakt</FooterLink>
          </ColumnContainer>
        </LogoWraper>
        <Container>
          <ColumnContainer>
            <FooterLink to="/">Regulamin sklepu</FooterLink>
            <FooterLink to="/">Regulamin zwrotów</FooterLink>
            <FooterLink to="/">Rodo</FooterLink>
            <FooterLink to="/">Polityka prywatności</FooterLink>
          </ColumnContainer>
          <LinksWrapper>
            <GitLink />
            <FacebookLink />
          </LinksWrapper>
        </Container>
      </FooterContainer>
      <CopyrightTitle>
        © Copyright 2020 by Localhost Group sp.z.o.o
      </CopyrightTitle>
    </LayoutFooter>
  );
};

export default Footer;
