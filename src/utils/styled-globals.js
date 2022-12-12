import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;

    background-color: hsl(195, 45%, 75%);
  }

  textarea {
    resize: none;
  }
`;
