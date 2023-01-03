import styled, { css } from 'styled-components';

export const StyledManual = {
  Details: styled.details``,
  Summary: styled.summary`
    /* Internal layout */
    font-size: 19px;
  `,
  Item: styled.li`
    /* External layout */
    margin: 5px;

    /* Internal layout */
    padding: 5px;

    /* Modifiers */
    background-color: rgba(0, 0, 0, 0.5);
    list-style: disc;
    list-style-position: inside;

    p {
      margin: 1em 0 0 0;
    }
  `,
  DetailsContainer: styled.div`
    /* External layout */
    width: 100%;
  `,
  ContainerOverride: css`
    justify-content: flex-start;
  `,
};
