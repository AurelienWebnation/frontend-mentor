import { createGlobalStyle } from "styled-components";
import { QUERIES } from "../../constants.ts";

export const GlobalStyle = createGlobalStyle`
  /*---- FONT ----*/
  @font-face {
    font-family: 'Figtree';
    font-style: normal;
    font-weight: 300 900;
    font-display: swap;
    src: url("/fonts/Figtree-VariableFont_wght.ttf") format('truetype');
  }

  @font-face {
    font-family: 'Figtree';
    font-style: italic;
    font-weight: 300 900;
    font-display: swap;
    src: url("/fonts/Figtree-Italic-VariableFont_wght.ttf") format('truetype');
  }

  /*---- RESET ----*/
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  * {

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

  html, body, #root {
    height: 100%;
  }

  /*---- Global Style ----*/
  :root {
    --color-primary: hsl(47, 88%, 63%);
    --color-text: hsl(0, 0%, 50%);
    --color-black: hsl(0, 0%, 7%);
    --color-white: hsl(0, 0%, 100%);
    --border-radius: 20px;

    --spacing-lg: 1.5em;
    --spacing-md: 0.75em;
    --spacing-sm: 0.25em;

    --text-heading: ${20 / 16}rem;
    --text-body-m: ${14 / 16}rem;
    --text-body-s: ${12 / 16}rem;

    @media ${QUERIES.tabletAndUp} {
      --text-heading: ${24 / 16}rem;
      --text-body-m: ${16 / 16}rem;
      --text-body-s: ${14 / 16}rem;
    }

    --weight-extra-bold: 800;
    --weight-bold: 700;
    --weight-medium: 500;
  }

  body {
    background: var(--color-primary);
    font-family: "Figtree", sans-serif;
    display: grid;
    line-height: 150%;
    color: var(--color-black);
    font-weight: var(--weight-medium);
    font-size: var(--text-body-m);
  }

  #root {
    display: grid;
    place-items: center;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: var(--weight-extra-bold);
    color: var(--color-black);
  }

  h1 {
    font-size: var(--text-heading);
  }
`;
