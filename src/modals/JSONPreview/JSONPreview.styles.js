import styled from 'styled-components';
import JsonFormatter from 'react-json-formatter';

export const StyledJSONPreview = {
  Backdrop: styled.div`
    position: fixed;
    z-index: 10000;
    inset: 0 0 0 0;
    background-color: rgba(0, 0, 0, 0.5);
  `,
  Container: styled.div`
    position: relative;
    overflow-y: scroll;
    width: 80vw;
    height: 80vh;
    margin: 10vh auto;
    padding: 80px 50px;
    background-color: #e5e5e5;
  `,
  Formatter: styled(JsonFormatter)`
    background-color: #cfcfcf;
    padding: 20px;
  `,
  CloseButton: styled.button`
    position: absolute;
    right: 60px;
    top: 30px;
    background-color: #272727;
    color: white;
    border-radius: 50%;
    border: 2px solid #373737;
    width: 1.33em;
    height: 1.33em;
    font-size: 28px;
    font-family: sans-serif;
  `,
};
