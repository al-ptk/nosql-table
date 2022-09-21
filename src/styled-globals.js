import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;

    background-color: hsl(195, 45%, 75%);
  }
  
  input[type='text'] {
    width: 100px;
  }
`;
