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
    ${(props) => props.cssOverride || ''}
    position: relative;
    overflow-y: scroll;
    width: 80vw;
    height: 80vh;
    margin: 10vh auto;
    padding: 80px 50px;
    background-color: #e5e5e5;
  `,
  CloseButton: styled.button``,
  CloseIcon: styled(CircleXIcon)``,
  Button: styled.button``,
};
