import styled from 'styled-components';

export const DropDown = {
  Container: styled.div`
    /* External layout */
    position: fixed;
    top: ${(props) => props.yPos};
    left: ${(props) => props.xPos};
    z-index: 10;
    width: fit-content;

    /* Internal layout */
    padding: 5px 0px;

    /* Modifiers */
    background-color: #373737;
    border: 1px solid white;
  `,
  Button: styled.button`
    /* External layout */
    display: block;
    width: 100%;

    /* Internal layout */
    text-align: left;
    padding: 1px 10px;
    font-size: 16px;

    /* Modifiers */
    background-color: transparent;
    color: white;
    border: none;
    :disabled {
      color: rgba(255, 255, 255, 0.3);
    }
  `,
  HorRuler: styled.hr`
    margin: 5px 0;
  `,
};

export const DropDownAnchor = {
  Container: styled.div``,
  Button: styled.button`
    /* Internal layout */
    padding: 5px;
    font-size: 19px;

    /* Modifiers */
    background-color: transparent;
    color: white;
    border: none;
    font-weight: normal;
    ${(props) => props.CSSOverride}
  `,
};
