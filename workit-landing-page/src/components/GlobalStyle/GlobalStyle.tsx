import { createGlobalStyle } from 'styled-components';
import { QUERIES } from '../../constants.ts';

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

  /* GLOBAL */
  @font-face {
    font-family: 'Fraunces';
    font-style: normal;
    font-weight: 300 700;
    font-display: swap;
    src: url('/fonts/fraunces/Fraunces.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 100 900;
    font-display: swap;
    src: url('/fonts/manrope/Manrope-Variable.ttf') format('truetype');
  }

  :root {
    --color-primary: hsl(273 85% 13%);
    --color-accent: hsl(150 100% 63%);
    --color-body: hsl(271 12% 34%);
    --color-ghost-white: hsl(274 100% 99%);
    --color-white: hsl(0 0% 100%);
  }

  body {
    font-family: 'Manrope', sans-serif;
    color: var(--color-body);
    font-size: ${16 / 16}rem;
    line-height: 28px;

    @media ${QUERIES.laptopAndUp} {
      font-size: ${18 / 16}rem;
      line-height: 32px;
    }
  }
`;
