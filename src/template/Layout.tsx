import React from 'react';
import { Container, Wrapper } from '../styles/BasicComponents';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Mentoring i materiały dla programistów - Gladiatorzy JavaScriptu
        </title>
        <link rel="canonical" href="https://gladiators.netlify.app/" />
      </Helmet>
      <Container>
        <Wrapper>
          <Nav />
        </Wrapper>
        {children}
        <Footer />
      </Container>
    </>
  );
};

export default Layout;
