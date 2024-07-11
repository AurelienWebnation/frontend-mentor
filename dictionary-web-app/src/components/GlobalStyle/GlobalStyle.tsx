import { createGlobalStyle, css } from 'styled-components';

const darkColors = css`
  --color-black-1: #050505;
  --color-black-2: #1f1f1f;
  --color-black-3: #2d2d2d;
  --color-black-4: #3a3a3a;
  --color-grey-1: #757575;
  --color-grey-2: #e9e9e9;
  --color-grey-3: #f4f4f4;
  --color-white: #ffffff;
  --color-purple: #a445ed;
  --color-red: #ff5252;
`;

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
    font-family: 'Incosolata';
    font-style: normal;
    font-weight: 400 700;
    font-display: swap;
    src: url('/fonts/inconsolata/Inconsolata-VariableFont_wdth,wght.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400 700;
    font-display: swap;
    src: url('/fonts/inter/Inter-VariableFont_slnt,wght.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Lora';
    font-style: normal;
    font-weight: 400 700;
    font-display: swap;
    src: url('/fonts/lora/Lora-VariableFont_wght.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Lora';
    font-style: italic;
    font-weight: 400 700;
    font-display: swap;
    src: url('/fonts/lora/Lora-Italic-VariableFont_wght.ttf') format('truetype');
  }

  // Colors
  :root {
    --color-black-1: #050505;
    --color-black-2: #1f1f1f;
    --color-black-3: #2d2d2d;
    --color-black-4: #3a3a3a;
    --color-grey-1: #757575;
    --color-grey-2: #e9e9e9;
    --color-grey-3: #f4f4f4;
    --color-white: #ffffff;
    --color-purple: #a445ed;
    --color-red: #ff5252;
    
    
  }

  [data-theme='dark'] {
    ${darkColors}
  }
  
  @media (prefers-color-scheme: dark) {
    :root {
      ${darkColors}
    }
  }
  
  body {
    background: var(--background);
    color: var(--text-primary);
  }
  
/*  @media (prefers-color-scheme: dark), body[data-theme='dark']  {
    --background: #05010a;
    --text-primary: #f2f2f2;
    --text-secondary: #a7a4a4;
    --accent: #6a5acd;
    --accent-hover: #5b4cbe;
    --border: #696969;
    --shadow: 7px 15px 13px -4px #ffffff1b;
  }*/
  

`;
