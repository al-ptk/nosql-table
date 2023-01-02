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
  // @dryup @iconButtonStyles
  DeleteButton: styled.button`
    /* External layout */
    position: absolute;
    top: 2px;
    right: .5em;
    z-index: 100;
    width: 1.3em;
    height: 1.3em;

    /* Internal layout */
    font-size: 12px;
    padding: 0px 0px 1.1em 0px;

    /* Modifiers */
    border: none;
    background-color: rgba(137, 137, 137, 1);
    color: white;
    border-radius: 50%;
    font-weight: bold;
  `,
};
