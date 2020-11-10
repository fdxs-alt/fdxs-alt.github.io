import React from 'react';
import styled from 'styled-components';
import { SpaceBetweenContainer } from '../styles/BasicComponents';
import Logo from '../images/image_8.svg';
import { Link } from 'gatsby';

const LayoutFooter = styled.footer`
  width: 100%;
  background-color: ${(props) => props.theme.colors.grey_1};
`;
const FooterContainer = styled.div`
  width: 50%;
  margin: auto;
  display: flex;
  justify-content: space-between;
`;

const Container = styled(SpaceBetweenContainer)`
  width: 50%;
`;

const LinksWrapper = styled(SpaceBetweenContainer)`
  padding: 50px;
`;

const MainLogo = styled(Logo)`
  width: 200px;
  height: 200px;
`;

const FooterLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.white};
`;

const Footer = () => {
  return (
    <LayoutFooter>
      <FooterContainer>
        <SpaceBetweenContainer>
          <Container>
            <MainLogo />
            <LinksWrapper>
              <div>
                <FooterLink to="">Strona główna</FooterLink>
                <FooterLink to="">O mnie</FooterLink>
                <FooterLink to="">Kontakt</FooterLink>
              </div>
              <div>
                <FooterLink to="">Strona główna</FooterLink>
                <FooterLink to="">O mnie</FooterLink>
                <FooterLink to="">Kontakt</FooterLink>
              </div>
            </LinksWrapper>
          </Container>
        </SpaceBetweenContainer>
      </FooterContainer>
    </LayoutFooter>
  );
};

export default Footer;
