import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Container, Wrapper } from '../styles/BasicComponents';
import GlobalStyling from '../styles/styled-components/Global';
import theme from '../styles/styled-components/theme';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';

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
      <GlobalStyling />
      <Container>
        <Wrapper>
          <Nav />
        </Wrapper>
        {children}
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default Layout;
