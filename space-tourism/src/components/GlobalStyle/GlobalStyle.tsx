import { createGlobalStyle } from 'styled-components';
import { QUERIES } from '../../constants.ts';

export const GlobalStyle = createGlobalStyle`
  /*
    RESET
  */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }

  ol, ul {
    list-style: none;
  }

  body {
    -webkit-font-smoothing: antialiased;
    line-height: 1;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: none;
  }
  
  a {
    text-decoration: none;
    color: inherit;
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

  /*
    Global Styles
  */
  // Fonts
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

  @font-face {
    font-family: 'BarlowCondensed';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url("/fonts/BarlowCondensed-Bold.ttf") format('trueType');
  }

  @font-face {
    font-family: 'Barlow';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url("/fonts/Barlow-Regular.ttf") format('trueType');
  }
  
  // Animations
  @keyframes slideInFromRight {
    from {
      transform: translateX(100%);
    }
  }

  :root {
    // Colors
    --color-primary: hsl(0, 0%, 100%);
    --color-text: hsl(231, 77%, 90%);
    --color-black: hsl(230, 35%, 7%);
    --color-white: hsl(0, 0%, 100%);

    // Font-size
    --font-size-heading-1: ${80 / 16}rem;
    --font-size-heading-2: ${100 / 16}rem;
    --font-size-heading-3: ${54 / 16}rem;
    --font-size-heading-4: ${20 / 16}rem;
    --font-size-heading-5: ${16 / 16}rem;

    --font-size-subheading-1: ${28 / 16}rem;
    --font-size-subheading-2: ${14 / 16}rem;

    --font-size-nav: ${16 / 16}rem;
    --font-size-body: ${15 / 16}rem;
    
    @media (${QUERIES.tabletAndUp}) {
      --font-size-heading-1: ${150 / 16}rem;
      --font-size-heading-4: ${32 / 16}rem;
      --font-size-heading-5: ${20 / 16}rem;
    }

    @media (${QUERIES.laptopAndUp}) {
      --font-size-heading-5: ${28 / 16}rem;
    }
    
    // Spacing
    --spacing-1: ${8 / 16}rem;
    --spacing-2: ${12 / 16}rem;
    --spacing-3: ${16 / 16}rem;
    --spacing-4: ${24 / 16}rem;
    --spacing-5: ${32 / 16}rem;
    --spacing-6: ${40 / 16}rem;
    --spacing-7: ${48 / 16}rem;
    --spacing-8: ${64 / 16}rem;
    
    
  }

  html, body, #root {
    height: 100%;
  }

  body {
    background-color: var(--color-black);
    color: var(--color-text);
    font-size: var(--font-size-body);
    font-family: "Barlow", sans-serif;
  }
  
  p {
    line-height: 25px;
    
    @media (${QUERIES.tabletAndUp}) {
      line-height: 28px;
    }
    
    @media (${QUERIES.laptopAndUp}) {
      line-height: 32px;
    }
  }
  
  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;
