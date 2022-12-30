import styled from 'styled-components';
import CircleXIcon from '../assets/svgs/CircleXIcon';

export const Modal = {
  Backdrop: styled.div`
    /* External Layout */
    position: fixed;
    inset: 0 0 0 0;
    isolation: isolate;
    z-index: 300;

    /* Modifier */
    background-color: rgba(0, 0, 0, 0.5);
  `,
  Container: styled.div`
    /* External Layout */
    position: relative;
    width: 60vw;
    max-width: 600px;
    height: 80vh;
    margin: 10vh auto;

    /* Internal Layout */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: auto;
    padding: 80px 50px;

    /* Modifiers */
    color: white;
    background-color: #373737;
    border-radius: 15px;
    ${(props) => props.cssOverride || ''}

    @media screen and (max-width: 600px) {
      /* External layout */
      width: 90vw;

      /* Internal layout */
      padding: 40px 30px;
      gap: 20px;
    }
  `,
  CloseButton: styled.button`
    /* External layout */
    position: absolute;
    top: 20px;
    right: 20px;

    /* Modifiers */
    background-color: transparent;
    border: none;

    @media screen and (max-width: 600px) {
      /* External layout */
      top: 10px;
      right: 10px;
    }
  `,
  CloseIcon: styled(CircleXIcon)`
    /* External layout  */
    width: 40px;

    /* Modifier */
    fill: rgba(255, 255, 255, 0.8);

    @media screen and (max-width: 600px) {
      /* External layout */
      width: 25px;
    }
  `,
  Title: styled.h2`
    /* External layout */
    margin: ${(props) => props.margin || '0px'};

    /* Internal layout */

    /* Modifiers */
    color: white;
    text-align: center;
  `,
  TitleHolder: styled.div`
    /* External layout */
    margin: ${(props) => props.margin};

    @media screen and (max-width: 600px) {
      /* External layout */
      margin: -10px 0 20px 0;
    }
  `,
  Textarea: styled.textarea`
    /* External layout */
    width: 400px;
    height: 400px;

    /* Internal layout */
    padding: 10px;

    /* Modifiers */
    background-color: #2a2a2a;
    color: white;

    @media screen and (max-width: 600px) {
      /* External layout */
      width: 90%;
      height: 40vh;
    }
  `,
  Button: styled.button`
    /* External layout */
    margin: ${(props) => props.margin || '0px'};
    min-width: 100px;

    /* Internal layout */
    font-size: 20px;

    /* Modifiers */
    background-color: transparent;
    color: white;
    border: 1px solid;
    padding: 5px 10px;
    border-radius: 5px;
  `,
  ButtonHolder: styled.p`
    /* External layout */
    width: 400px;
    margin-bottom: -70px;

    /* Internal layout */
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 40px 0px;

    @media screen and (max-width: 600px) {
      /* External layout */
      width: 90%;
    }
  `,
};
