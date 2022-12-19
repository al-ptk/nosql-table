import { useEffect } from 'react';
import { useRef } from 'react';
import styled from 'styled-components';

/*
  Use them by composition, like this:

    function foo ({xPos, yPos, setContextVisibility}) {
      const ref = useRef(null);
      const closeContextMenu = () => {ref.current.remove()}/

      <div> // Any wrapper should do
        <ContextMenu 
        ref={ref}
          xPos={some_number} 
          yPos={some_number}
        >
          <ContextMenu 
            buttonText={someText}
            buttonAction={someFunction}
            closeContextMenu={setContextVisibility}
          />
        </ContextMenu>
      </div>
    }
*/

export function ContextMenu({ children, Reference, xPos, yPos, closeMenu }) {
  // Used for effect hook, down below
  const controlContextVisibility = () => {
    Reference.current.focus();

    const checkMenuFocusWithin = (e) => {
      // made into a named function in order to remove listener later on.
      const isFocusWithin = Reference.current.contains(document.activeElement);
      if (!isFocusWithin) {
        closeMenu();
      }
    };

    window.addEventListener('click', checkMenuFocusWithin);
    return () => {
      window.removeEventListener('click', checkMenuFocusWithin);
    };
  };
  useEffect(controlContextVisibility, [Reference, closeMenu]);

  return (
    <StyledMenu
      ref={Reference}
      xPos={!isNaN(xPos) ? `${xPos}px` : 'inherit'}
      yPos={!isNaN(yPos) ? `${yPos}px` : 'inherit'}
      tabIndex={0}
    >
      {children}
    </StyledMenu>
  );
}

export const ContextMenuButton = ({ buttonText, buttonAction, closeMenu }) => {
  return (
    <button
      onClick={() => {
        buttonAction();
        closeMenu();
      }}
      tabIndex={0}
    >
      {buttonText}
    </button>
  );
};

const StyledMenu = styled.div`
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
