import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    position: fixed;
    min-height: 100vh;
    background-color: #252525;

  }

  textarea {
    resize: none;
  }
`;
