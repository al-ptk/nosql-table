import styled from 'styled-components';

export const StyledDataCell = {
  Container: styled.td`
    /* External layout */
    width: 150px;
    height: 50px;
    position: relative;

    /* Modifiers */
    border-top: ${(props) =>
      props.isVertical ? '1px solid rgba(0, 0, 0, .3)' : 'none'};
    border-left: ${(props) =>
      props.isVertical ? 'none' : '1px solid rgba(0, 0, 0, .5)'};
  `,
  Textarea: styled.textarea`
    /* External layout */
    width: 100%;
    height: 100%;

    /* Internal layou */
    padding-bottom: 3px;
    isolation: isolate;
    overflow: hidden;

    /* Modifiers */
    color: white;
    background-color: inherit;
    border: none;

    :focus {
      outline: none;
    }

    :focus,
    :hover {
      overflow: auto;
    }

    // Scrollbar stuff
    /* width */
    ::-webkit-scrollbar {
      width: 5px;
      height: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background-color: transparent;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 5px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  `,
};
