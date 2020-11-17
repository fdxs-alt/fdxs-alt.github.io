import React from 'react';
import {
  LayoutFooter,
  FooterContainer,
  LogoWraper,
  MainLogo,
  ColumnContainer,
  FooterLink,
  LinksWrapper,
  CopyrightTitle,
  Container,
} from '../styles/Footer';
import Logo from '../../images/png/image_8.png';
import FacebookLink from './FacebookLink';
import GitLink from './GitLink';

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
