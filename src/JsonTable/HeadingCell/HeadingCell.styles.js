import styled from 'styled-components';

export const StyledHeadingCell = {
  Container: styled.th`
    width: 150px;
    height: 50px;
    position: relative;
    color: white;
    display: grid;
    place-items: center;
  `,
  Textarea: styled.textarea`
    color: white;
    background-color: inherit;
    border: none;
    width: 90%;
    height: fit-content;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    padding-bottom: 3px;
    text-align: center;

    :focus {
      outline: none;
      border: 1px solid rgba(255, 255, 255, 0.7);
      box-shadow: 0px 0px 8px rgba(255, 255, 255, 0.3);
    }
  `,
  // @dryup @iconButtonStyles
  DeleteButton: styled.button`
    /* External layout */
    position: absolute;
    top: 2px;
    right: 0.5em;
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
