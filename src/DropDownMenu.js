import React from 'react';
import styled from 'styled-components';

export default function DropDownMenu({ children, xPos, yPos, blurHandler }) {
  const self = React.useRef(null);

  React.useEffect(() => {
    self.current.focus();
  }, [self]);

  return (
    <StyledMenu
      tabIndex={0}
      onBlur={blurHandler}
      ref={self}
      {...{ xPos, yPos }}
    >
      {children}
    </StyledMenu>
  );
}

export const StyledMenu = styled.div`
  position: absolute;
  top: ${(props) => props.yPos || 0};
  left: ${(props) => props.xPos || 0};
  z-index: 10;
  width: 200px;
  background-color: #373737;
  border: 1px solid white;

  button {
    display: block;
    background-color: transparent;
    color: white;
    border: none;
  }
`;
