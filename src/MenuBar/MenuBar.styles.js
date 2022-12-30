import styled from 'styled-components';

export const StyledMenuBar = {
  Container: styled.header`
    /* External layout */
    position: fixed;
    top: 0;
    width: 100vw;
    min-height: 3em;
    flex-wrap: wrap;
    z-index: 200;
    isolation: isolate;

    /* Internal layout */
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 15px;
    padding: 0px 15px;

    /* Modifiers */
    background-color: #373737;
    color: white;
  `,
  Link: styled.a`
    /* Internal Layout */
    font-size: 19px;

    /* Modifiers */
    background-color: transparent;
    color: white;
    border: none;
    text-decoration: none;
  `,
  FlexWrapper: styled.div`
    /* Internal Layout */
    display: flex;
    align-items: center;
    gap: 20px;
  `,
};
