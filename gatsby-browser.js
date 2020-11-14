import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './src/styles/styled-components/theme';
import GlobalStyling from './src/styles/styled-components/Global';
export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyling />
    {element}
  </ThemeProvider>
);
