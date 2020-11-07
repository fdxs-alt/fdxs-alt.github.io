import React, { Children } from "react"
import { ThemeProvider } from "styled-components"
import { Container } from "../styles/BasicComponents"
import GlobalStyling from "../styles/styled-components/Global"
import theme from "../styles/styled-components/theme"

const Layout: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyling />
      <Container>{children}</Container>
    </ThemeProvider>
  )
}

export default Layout
