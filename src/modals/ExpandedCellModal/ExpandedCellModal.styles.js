import styled, { css } from 'styled-components';

export const StyledExpandedCellModal = {
  ContainerOverride: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60vw;
    height: fit-content;
  `,
  Textarea: styled.textarea`
    padding: 10px;
    width: 400px;
    height: 400px;
    background-color: #2a2a2a;
    color: white;
  `,
  ButtonHolder: styled.p`
    width: 400px;
    padding: 40px 0px;
    margin-bottom: -70px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  `,
  Title: styled.h2`
    color: white;
    text-align: center;
  `,
};
