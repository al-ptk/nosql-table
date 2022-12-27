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
    background-color: hsl(190, 50%, 50%) !important;
    color: white !important;
  }
`;
