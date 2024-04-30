import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  /* RESET */
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
  }
  
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;
    -webkit-font-smoothing: antialiased;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  #root, #__next {
    isolation: isolate;
  }
  
  /* GLOBAL */
  @font-face {
    font-family: 'Fraunces';
    font-style: normal;
    font-weight: 100 900;
    font-display: swap;
    src: url('/fonts/fraunces/Fraunces-Variable.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 100 900;
    font-display: swap;
    src: url('/fonts/manrope/Manrope-Variable.ttf') format('truetype');
  }
`
