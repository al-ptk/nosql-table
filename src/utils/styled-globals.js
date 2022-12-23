import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    min-height: 80vh;
    background-color: #252525;
}

  textarea {
    resize: none;
  }

  button {
    cursor: pointer;
  }

  th.highlight-selected,
  td.highlight-selected > textarea {
    background-color: hsl(190, 50%, 50%);
    color: white;
  }
`;
