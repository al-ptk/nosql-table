import styled from 'styled-components';

export const StyledTitleInput = {
  Container: styled.div`
    /* Internal layout */
    display: flex;
    align-items: baseline;

    @media screen and (max-width: 600px) {
      margin-top: 5px;
    }
  `,
  Input: styled.input`
    /* External layout */
    width: 200px;
    margin: 5px 0px;
    padding: 0 7px;
    order: 0;

    /* Internal layout */
    font-size: 18px;

    /* Modifiers */
    background-color: transparent;
    color: white;
    outline: none;
    border: none;
    border-bottom: 1px solid;
  `,
  MobileMenuToggler: styled.button`
    /* External layout */
    width: 24px;
    height: 24px;
    margin-left: 15px;

    /* Internal layout */
    display: grid;
    place-items: center;
    padding: 0 0 2px 2px;

    /* Modifiers */
    border: none;
    background-color: rgba(137, 137, 137, 0.5);
    color: white;
    border-radius: 50%;
    font-weight: bold;

    @media screen and (min-width: 600px) {
      display: none;
    }
  `,
};
