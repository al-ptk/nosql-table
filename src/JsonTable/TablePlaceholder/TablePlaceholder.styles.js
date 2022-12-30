import styled from 'styled-components';

export const StyledTP = {
  Container: styled.div`
    /* External Layout */
    position: relative;
    margin: 100px auto;
    width: 70vw;
    max-width: 900px;
    height: 40vh;

    /* Internal Layout */
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10%;
    padding: 20px 0;

    /* Modifiers */
    background-color: transparent;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.7);
    border-radius: 15px;

    @media screen and (max-width: 800px) {
      /* External Layout */
      width: 90vw;

      /* Internal Layout */
      gap: 5%;
      padding: 0;

      /* Modifiers */
      /* @dryup @fontSizes */
      font-size: 10px !important;
    }
  `,
  Button: styled.button`
    /* External layout */
    height: fit-content;
    font-size: 24px;
    min-width: 100px;

    /* Internal layout */
    padding: 0px 20px;

    /* Modifiers */
    border-radius: 15px;
    color: white;
    border: 1px solid;
    background-color: transparent;
    font-weight: bold;

    @media screen and (max-width: 800px) {
      /* External Layout */
      min-width: 100px;

      /* Internal layout */
      /* @dryup @fontSizes */
      font-size: 20px;

      /* Modifiers */
    }
  `,
  Ruler: styled.hr`
    height: 80%;
  `,
};
