import styled from 'styled-components';

const Tooltip = styled.div`
  position: fixed;
  z-index: 300;
  top: ${(props) => props.yPos}px;
  left: ${(props) => props.xPos}px;
  width: fit-content;
  height: fit-content;
  padding: 2px;
  background-color: black !important;
  color: white;
`;

export default Tooltip;
