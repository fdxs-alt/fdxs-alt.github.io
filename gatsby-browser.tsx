import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './src/styles/styled-components/theme';
import GlobalStyling from './src/styles/styled-components/Global';
import { WrapPageElementBrowserArgs } from 'gatsby';

export const wrapRootElement = ({
  element,
}: {
  element: WrapPageElementBrowserArgs;
}) => (
  <ThemeProvider theme={theme}>
    <GlobalStyling />
    {element}
  </ThemeProvider>
);
