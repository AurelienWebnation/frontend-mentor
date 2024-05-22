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

  /* GLOBAL */
  @font-face {
    font-family: 'Inter';
    src: url('/fonts/inter/Inter-VariableFont_slnt,wght.ttf') format('truetype');
    font-weight: 400 700;
    font-display: swap;
  }
  
  body {
    font-family: 'Inter', sans-serif;
    font-size: ${14 / 16}rem;
    line-height: 150%;
    background-color: var(--color-black);
  }
  
  * {
    line-height: 150%;
  }
  
  :root {
    --color-black: #141414;
    --color-grey: #333;
    --color-dark-grey: #1F1F1F;
    --color-white: #FFFFFF;
    --color-neon-green: #C4F82A;

    --spacing-xxs: 4px;
    --spacing-xs: 12px;
    --spacing-sm: 16px;
    --spacing-md: 24px;
    --spacing-lg: 40px;
  }
  
  // Animations
  @keyframes fadeIn {
    from {
      transform: translateX(200%);
    }
  }
`;
