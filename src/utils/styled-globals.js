import { createGlobalStyle } from 'styled-components';
import NotoSansExtraLight from '../assets/NotoSans-ExtraLight.ttf';
import NotoSansLight from '../assets/NotoSans-Light.ttf';
import NotoSansMedium from '../assets/NotoSans-Medium.ttf';

export const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'Noto Sans';
    src: url(${NotoSansExtraLight});
    font-weight: lighter;
  }

  @font-face {
    font-family: 'Noto Sans';
    src: url(${NotoSansLight});
    font-weight: normal;
  }

  @font-face {
    font-family: 'Noto Sans';
    src: url(${NotoSansMedium});
    font-weight: bold;
  }

  * {
    font-family: 'Noto Sans';
    font-weight: normal;
    font-size: 16px;
  }

  body {
    min-height: 80vh;
    background-color: #252525;
}

  textarea {
    resize: none;
    border: none;
  }

  button {
    cursor: pointer;
  }

  td, th {
    border: none ;
    outline: none;
  }

  th.highlight-selected,
  td.highlight-selected > textarea {
    background-color: rgba(	64, 170, 191, .65) !important;
    color: white !important;
  }

  .fade-out {
    opacity: 0;
  }
`;
