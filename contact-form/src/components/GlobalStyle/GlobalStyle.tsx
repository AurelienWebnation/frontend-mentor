import { createGlobalStyle } from 'styled-components';
import { theme } from '../../constants.ts';

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

  /* GLOBAL */
  // Fonts
  @font-face {
    font-family: 'Karla';
    font-style: normal;
    font-weight: 400 700;
    font-display: swap;
    src: url('/fonts/Karla-VariableFont_wght.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Karla';
    font-style: italic;
    font-weight: 400;
    font-display: swap;
    src: url('/fonts/Karla-Italic-VariableFont_wght.ttf') format('truetype');
  }
  
  html {
    // Colors
    --color-grey-900: hsl(187, 24%, 22%);
    --color-grey-500: hsl(186, 15%, 59%);
    --color-white: hsl(0, 0%, 100%);
    --color-green-600: hsl(169, 82%, 27%);
    --color-green-200: hsl(148, 38%, 91%);
    --color-red: hsl(0, 66%, 56%);

    // Spacing
    --spacing-100: ${theme.spacing[100]}px;
    --spacing-150: ${theme.spacing[150]}px;
    --spacing-200: ${theme.spacing[200]}px;
    --spacing-300: ${theme.spacing[300]}px;
    --spacing-400: ${theme.spacing[400]}px;
    --spacing-500: ${theme.spacing[500]}px;
    --spacing-1600: ${theme.spacing[1600]}px;
    --global-line-height: 150%;

    // Font sizes
    --font-size-body-sm: ${theme.fontSizes.body.sm / 16}rem;
    --font-size-body-md: ${theme.fontSizes.body.md / 16}rem;
    --font-size-heading: ${theme.fontSizes.heading / 16}rem;
    
    // Others
    --border-width: 1px;
  }
  
  * {
    line-height: var(--global-line-height);
  }
  
  body {
    font-size: var(--font-size-body-sm);
    color: var(--color-grey-900);
    font-family: Karla, sans-serif;
    background: var(--color-green-200);
  }
`;
