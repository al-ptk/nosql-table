import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, html {
    min-height: 100%;
    background-color: lightgray;
  }
  
  input[type='text'] {
    width: 100px;
  }
`;
