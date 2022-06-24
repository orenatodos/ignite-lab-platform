import { ThemeProvider } from 'styled-components'
import { ApolloProvider } from '@apollo/client'

import { client } from './lib/apollo'

import { theme } from './assets/styles/theme'
import { GlobalStyles } from './assets/styles/global'

import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <GlobalStyles />

        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ApolloProvider>
    </ThemeProvider>
  )
}
