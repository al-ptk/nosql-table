import styled from 'styled-components';

export const StyledRepeatedInput = {
  Backdrop: styled.div`
    position: absolute;
    z-index: 100;
    width: 600px;
    height: 600px;
    inset: 10vh 0 0 30vw;
    background-color: rgba(0, 0, 0, 0.7);
    display: grid;
    place-items: center;
  `,
  Container: styled.div`
    width: 400px;
    height: 400px;
    padding: 30px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 4fr 1fr;
  `,
  Textarea: styled.textarea`
    grid-area: 1 / 1 / 2 / 3;
  `,
  Button: styled.button``,
};
