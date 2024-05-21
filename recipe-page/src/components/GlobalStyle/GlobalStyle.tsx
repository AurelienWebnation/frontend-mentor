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

  /* GLOBAL */
  @font-face {
    font-family: 'Outfit';
    src: url('/fonts/outfit/Outfit-VariableFont_wght.ttf') format('truetype');
    font-weight: 400 600;
    font-display: swap;
  }

  @font-face {
    font-family: 'Young Serif';
    src: url('/fonts/young-serif/YoungSerif-Regular.ttf') format('truetype');
    font-display: swap;
  }

  :root {
    /* COLORS */
    --color-dark-charcoal: hsl(24, 5%, 18%);
    --color-dark-raspberry: hsl(332, 51%, 32%);
    --color-brandy-red: hsl(14, 45%, 36%);
    --color-wenge-brown: hsl(30, 10%, 34%);
    --color-eggshell: hsl(30, 54%, 90%);
    --color-white: hsl(0, 0%, 100%);
    --color-white-coffee: hsl(30, 18%, 87%);
    --color-snow: hsl(330, 100%, 98%);

    /* SPACING */
    --spacing-xs: 8px;
    --spacing-sm: 16px;
    --spacing-md: 24px;
    --spacing-lg: 32px;
    --spacing-xl: 40px;
  }

  body {
    font-family: Outfit, sans-serif;
    font-weight: 400;
    color: var(--color-wenge-brown);
    background-color: var(--color-eggshell);
    line-height: 150%;
  }
  
  strong {
    font-weight: 700;
  }
`;
