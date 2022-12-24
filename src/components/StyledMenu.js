import styled from 'styled-components';

export const StyledDropDownMenu = styled.div`
  position: fixed;
  top: ${(props) => props.yPos};
  left: ${(props) => props.xPos};
  z-index: 10;
  width: fit-content;
  background-color: #373737;
  border: 1px solid white;
  padding: 2px 0px;

  span > button,
  button {
    display: block;
    background-color: transparent;
    color: white;
    border: none;
    width: 100%;
    text-align: left;
    padding: 1px 10px;
    font-size: 16px;
  }

  hr {
    color: rgba(255, 255, 255, 0.3);
    margin: 2px 0;
  }
`;
