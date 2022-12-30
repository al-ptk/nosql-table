import styled from 'styled-components';

export const StyledMenuBar = {
  Container: styled.header`
    /* External layout */
    position: fixed;
    top: 0;
    width: 100vw;
    min-height: 3em;
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

    @media screen and (max-width: 600px) {
      /* External layout */
      width: 100%;
      height: 3em;

      /* Internal layout */
      flex-direction: column;
      align-items: center;
      overflow-y: clip;
    }
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
    gap: 5px;

    @media screen and (max-width: 600px) {
      /* External layout */
      order: 1;

      /* Internal Layout */
      flex-direction: column;
    }
  `,
};
