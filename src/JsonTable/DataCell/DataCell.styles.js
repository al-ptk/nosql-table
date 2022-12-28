import styled from 'styled-components';

export const StyledDataCell = {
  Container: styled.td`
    width: 150px;
    height: 50px;
    position: relative;
    border-top: ${(props) =>
      props.isVertical ? '1px solid rgba(0, 0, 0, .3)' : 'none'};
    border-left: ${(props) =>
      props.isVertical ? 'none' : '1px solid rgba(0, 0, 0, .5)'};
  `,
  Textarea: styled.textarea`
    color: white;
    background-color: inherit;
    border: none;
    width: 100%;
    height: 100%;
    padding-bottom: 3px;

    &:focus {
      outline: none;
    }
  `,
};
