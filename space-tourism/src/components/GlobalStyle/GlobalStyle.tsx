import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  /*
    RESET
  */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
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

  /*
    Global Styles
  */
  @font-face {
    font-family: 'Bellefair';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url("/fonts/Bellefair-Regular.ttf") format('trueType');
  }

  @font-face {
    font-family: 'BarlowCondensed';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url("/fonts/BarlowCondensed-Regular.ttf") format('trueType');
  }

  :root {
    // Colors
    --color-primary: hsl(0, 0%, 100%);
    --color-text: hsl(231, 77%, 90%);
    --color-black: hsl(230, 35%, 7%);
    --color-white: hsl(0, 0%, 100%);

    // Font-size
    --font-size-heading-1: ${150 / 16}rem;
    --font-size-heading-2: ${100 / 16}rem;
    --font-size-heading-3: ${54 / 16}rem;
    --font-size-heading-4: ${32 / 16}rem;
    --font-size-heading-5: ${28 / 16}rem;

    --font-size-subheading-1: ${28 / 16}rem;
    --font-size-subheading-2: ${14 / 16}rem;

    --font-size-nav: ${16 / 16}rem;
    --font-size-body: ${18 / 16}rem;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    background-color: var(--color-black);
    color: var(--color-text);
    font-size: var(--font-size-body);
    font-family: "Bellefair", sans-serif;
  }
`;
