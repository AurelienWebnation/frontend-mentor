import { createGlobalStyle } from 'styled-components';

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
  }
  
  input, button, textarea, select {
    font: inherit;
  }
  
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  #root, #__next {
    isolation: isolate;
  }
  
  html, body, #root {
    height: 100%;
  }
  
  button {
    background: transparent;
  }
  
  /* GLOBAL */
  // Fonts
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400 700;
    font-display: swap;
    src: url('/fonts/Inter-VariableFont_slnt,wght.ttf') format('truetype');
  }
  
  :root {
    // Colors
    --color-blue: hsl(227, 92%, 58%);
    --color-gunmetal: hsl(215, 31%, 21%);
    --color-dark-electric-blue: hsl(215, 17%, 45%);
    --color-pure-white: hsl(0, 0%, 100%);
    --color-gradiant-1: linear-gradient(290deg, #D6E6FE 0%, rgba(214, 252, 254, 0.00) 100%);
    
    // Fonts sizes
    --font-size-body-m: ${16 / 16}rem;
    --font-size-body-s: ${14 / 16}rem;
  }
  
  body {
    font-family: 'Inter', sans-serif;
    font-size: var(--font-size-body-m);
    line-height: 150%;
    color: var(--color-dark-electric-blue);
  }
`;
