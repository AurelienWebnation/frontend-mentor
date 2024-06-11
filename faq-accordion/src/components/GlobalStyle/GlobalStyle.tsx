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
        font-family: 'Work Sans';
        font-style: normal;
        font-weight: 400 700;
        font-display: swap;
        src: url('/fonts/WorkSans-VariableFont_wght.ttf') format('truetype');
    }
    
    :root {
      // Colors
      --color-dark-purple: hsl(292, 42%, 14%);
      --color-pale-purple: hsl(292, 16%, 49%);
      --color-pink: hsl(281, 83%, 54%);
      --color-light-pink: hsl(275, 100%, 97%);
      --color-white: hsl(0, 0%, 100%);

      // Fonts sizes
      --fontsize-body-sm: ${14 / 16}rem;
      --fontsize-body-md: ${16 / 16}rem;
    }
    
    body {
      font-family: Work Sans, sans-serif;
      font-size: var(--fontsize-body-sm);
      color: var(--color-pale-purple);
      background-color: var(--color-light-pink);
      line-height: 150%;
        
      @media ${QUERIES.tabletAndUp} {
        font-size: var(--fontsize-body-md);
      }
    }
`;
