import styled from 'styled-components';
import CircleXIcon from '../assets/svgs/CircleXIcon';

export const Modal = {
  Backdrop: styled.div`
    position: fixed;
    inset: 0 0 0 0;
    background-color: rgba(0, 0, 0, 0.5);
    isolation: isolate;
    z-index: 300;
  `,
  Container: styled.div`
    position: relative;
    overflow-y: scroll;
    margin: 10vh auto;
    padding: 80px 50px;
    background-color: #373737;
    border-radius: 15px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60vw;
    height: fit-content;
    color: white;

    ${(props) => props.cssOverride || ''}
  `,
  CloseButton: styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
    background-color: transparent;
    border: none;
  `,
  CloseIcon: styled(CircleXIcon)`
    fill: rgba(255, 255, 255, 0.8);
  `,
  Button: styled.button`
    margin: ${(props) => props.margin || '0px'};
    background-color: transparent;
    color: white;
    border: 1px solid;
    padding: 5px 10px;
    font-size: 24px;
    border-radius: 5px;
    min-width: 100px;
  `,
  Title: styled.h2`
    color: white;
    text-align: center;
  `,
  Textarea: styled.textarea`
    padding: 10px;
    width: 400px;
    height: 400px;
    background-color: #2a2a2a;
    color: white;
  `,
  ButtonHolder: styled.p`
    width: 400px;
    padding: 40px 0px;
    margin-bottom: -70px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  `,
};
