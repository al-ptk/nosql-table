import styled from 'styled-components';

export const StyledExpandedCellModal = {
  Container: styled.div`
    position: absolute;
    z-index: 100;
    width: 400px;
    height: 400px;
    inset: 10vh 0 0 30vw;
    background-color: #373737;
    padding: 30px;
  `,
  CloseButton: styled.button`
    position: absolute;
    right: 20px;
    top: 20px;
  `,
  Textarea: styled.textarea`
    width: 100%;
    height: 100%;
  `,
};
