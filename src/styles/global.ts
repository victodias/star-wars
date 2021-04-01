import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0%;
    padding: 0;
  }
  /* html {
    font-size: 62.5%
  } */
  html, body, #__next {
    height: 100%;
  }
  body {
    font-family: 'Cairo', sans-serif;
    font-weight: 400
  }
`

export default GlobalStyles;