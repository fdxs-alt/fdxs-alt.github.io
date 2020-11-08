import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Container, Wrapper } from '../styles/BasicComponents';
import GlobalStyling from '../styles/styled-components/Global';
import theme from '../styles/styled-components/theme';
import Nav from '../components/Nav';

const Layout: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyling />
      <Container>
        <Wrapper>
          <Nav />
        </Wrapper>
        {children}
      </Container>
    </ThemeProvider>
  );
};

export default Layout;
