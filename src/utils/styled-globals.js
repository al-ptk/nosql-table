import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    min-height: 80vh;
    background-color: #252525;
}

  textarea {
    resize: none;
    border: none !important;
  }

  button {
    cursor: pointer;
  }

  td, th {
    border: none !important;
    outline: none;
  }

  th.highlight-selected,
  td.highlight-selected > textarea {
    background-color: rgba(	64, 170, 191, .65) !important;
    color: white !important;
  }
`;
