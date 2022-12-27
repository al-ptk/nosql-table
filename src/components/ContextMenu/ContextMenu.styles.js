import styled from 'styled-components';

export const StyledContextMenu = {
  Container: styled.div`
    position: fixed;
    top: ${(props) => props.yPos};
    left: ${(props) => props.xPos};
    z-index: 150;
    width: fit-content;
    background-color: #373737;
    border: 1px solid white;
    padding: 2px 0px;
  `,
  Button: styled.button`
    display: block;
    background-color: transparent;
    color: white;
    border: none;
    width: 100%;
    text-align: left;
    padding: 1px 10px;
    font-size: 16px;
  `,
};
