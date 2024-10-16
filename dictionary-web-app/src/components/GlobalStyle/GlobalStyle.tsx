import { createGlobalStyle, css } from 'styled-components';
import { QUERIES } from '../../constants.ts';

const selectedTypo = css`
  [data-typo='sansSerif'] {
    --font-family: var(--font-family-sans-serif);
  }

  [data-typo='serif'] {
    --font-family: var(--font-family-serif);
  }

  [data-typo='mono'] {
    --font-family: var(--font-family-mono);
  }
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
    color: inherit;
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
  
  :root {
    // Colors
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
    
    --background-color-body: ${(props) => props.theme.backgroundBody};
    --background-color-input: ${(props) => props.theme.backgroundInput};
    --background-color-dropdown: ${(props) => props.theme.backgroundDropdown};
    --font-color: ${(props) => props.theme.font};
    --input-placeholder-color: ${(props) => props.theme.inputPlaceholder};
    --box-shadow-color: ${(props) => props.theme.boxShadow};

    // Font sizes
    --font-size-body-s: ${14 / 16}rem;
    --font-size-body-m: ${15 / 16}rem;
    
    --font-size-heading-s: ${16 / 16}rem;
    --font-size-heading-m: ${18 / 16}rem;
    --font-size-heading-l: ${32 / 16}rem;
    
    @media ${QUERIES.tabletAndUp} {
      --font-size-body-m: ${18 / 16}rem;
      
      --font-size-heading-s: ${20 / 16}rem;
      --font-size-heading-m: ${24 / 16}rem;
      --font-size-heading-l: ${64 / 16}rem;
    }
    
    // Font families
    --font-family-sans-serif: 'Inter', sans-serif;
    --font-family-serif: 'Lora', serif;
    --font-family-mono: 'Incosolata', monospace;
    ${selectedTypo};
  }
  
  body {
    font-family: var(--font-family);
    color: var(--font-color);
    font-size: var(--font-size-body-m);
    line-height: 24px;
    background-color: var(--background-color-body);
  }
`;
