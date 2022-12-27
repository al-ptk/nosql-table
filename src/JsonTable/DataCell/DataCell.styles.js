import styled from 'styled-components';

export const StyledDataCell = {
  Container: styled.td`
    width: 150px;
    height: 50px;
    position: relative;
    border: 1px solid rgba(0, 0, 0, 0.5);
  `,
  Textarea: styled.textarea`
    color: white;
    background-color: inherit;
    border: none;
    width: 100%;
    height: 100%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    padding-bottom: 3px;

    &:focus {
      outline: none;
      border: 1px solid rgba(255, 255, 255, 0.7);
      box-shadow: 0px 0px 8px rgba(255, 255, 255, 0.3);
    }
  `,
};
