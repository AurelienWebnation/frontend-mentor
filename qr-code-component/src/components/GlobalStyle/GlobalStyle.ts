import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  /*---- FONT ----*/
  @font-face {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 300 900;
    font-display: swap;
    src: url("/fonts/Outfit-VariableFont.woff2") format("woff2");
  }
  
  /*---- RESET ----*/
  *, *::before, *::after {
    box-sizing: border-box;
  }
  
  * {
    margin: 0;
  }
  
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    color: var(--color-text);
    background: hsl(212, 45%, 89%);
    font-family: "Outfit", sans-serif;
    font-size: 0.9375rem;
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
    --color-text: hsl(220, 15%, 55%);
    --color-title: hsl(218, 44%, 22%);
    --color-white: hsl(0, 0%, 100%);
    --border-radius: 20px;
  }
`;
