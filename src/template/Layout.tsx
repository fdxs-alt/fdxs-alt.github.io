import React from 'react';
import { Container, Wrapper } from '../styles/BasicComponents';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/styled-components/theme';
import GlobalStyling from '../styles/styled-components/Global';

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
