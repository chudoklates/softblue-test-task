import React from 'react'
import { ThemeProvider } from 'styled-components'
import Layout from './src/components/Layout'
import GlobalStyle, { theme } from './src/theme'

export const wrapPageElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Layout>{element}</Layout>
  </ThemeProvider>
)
