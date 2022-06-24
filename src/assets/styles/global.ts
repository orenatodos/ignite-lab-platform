import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;

      &::after,
      &::before {
        box-sizing: inherit;
      }
    }

    body,
    button,
    input {
      font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-size: 1rem;
      font-weight: 400;
    }

    body {
      background-color: ${theme.colors.gray[900]};
      color: ${theme.colors.gray[100]};
      -webkit-font-smoothing: antialiased;
    }

    button {
      cursor: pointer;
    }
  `}

`
