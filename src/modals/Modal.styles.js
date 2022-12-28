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
    width: 80vw;
    height: 80vh;
    margin: 10vh auto;
    padding: 80px 50px;
    background-color: #373737;
    border-radius: 15px;
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
};
