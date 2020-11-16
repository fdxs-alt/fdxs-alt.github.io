import React from 'react';
import { Container } from '../styles/BasicComponents';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../styles/styled-components/theme';
import GlobalStyling from '../styles/styled-components/Global';

const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin: 0 auto 150px auto;
  overflow: hidden;
  position: sticky;
  top: 0;
  background-color: ${(props) => props.theme.colors.white};
  z-index: 150;
`;

const Layout: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Mentoring i materiały dla programistów - Gladiatorzy JavaScriptu
        </title>
        <link rel="canonical" href="https://gladiators.netlify.app/" />
      </Helmet>
      <Container>
        <GlobalStyling />
        <NavWrapper>
          <Nav />
        </NavWrapper>
        {children}
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default Layout;
