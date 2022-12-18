import React from 'react';
import styled from 'styled-components';

export default function DropDownMenu({ children, xPos, yPos, menuRef }) {
  React.useEffect(() => {
    menuRef.current.focus();
  }, [menuRef]);

  return (
    <StyledMenu
      tabIndex={0}
      ref={menuRef}
      xPos={!isNaN(xPos) ? `${xPos}px` : 'inherit'}
      yPos={!isNaN(yPos) ? `${yPos}px` : 'inherit'}
    >
      {children}
    </StyledMenu>
  );
}

export const StyledMenu = styled.div`
  position: fixed;
  top: ${(props) => props.yPos};
  left: ${(props) => props.xPos};
  z-index: 10;
  width: 200px;
  background-color: #373737;
  border: 1px solid white;

  button {
    display: block;
    background-color: transparent;
    color: white;
    border: none;
    width: 100%;
  }
`;
