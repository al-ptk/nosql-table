import styled from 'styled-components';

export const StyledIndexHeading = {
  Container: styled.th`
    /* External layout */
    position: sticky;
    left: 0;
    z-index: 100;
    width: 150px;
    height: 50px;

    /* Internal layout */
    display: flex;
    align-items: center;
    justify-content: center;
    isolation: isolate;

    /* Modifiers */
    cursor: default;
    background-color: #373737;
    color: white;
    border-right: ${(props) =>
      props.isVertical ? 'none' : '1px solid rgba(0, 0, 0, .5)'};
  `,
};
