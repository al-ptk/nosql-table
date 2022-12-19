import { useEffect } from 'react';
import styled from 'styled-components';

/*
  ContextMenu and ContextMenuButton require a custom parent component.
  Use them by composition, like this:

    function SomeComponent () {
      const [context, setContextMenu] = useState(null)
      const Reference = useRef(null)

      return 
        <div onContextMenu={() => {
          setContextMenu(
              <SomeComponentContextMenu 
                closeMenu={()=setContextMenu(null)}
                {...{xPos, yPos, Reference}}
              />
          )
          }
        >
          {some stuff}
          {context}
        </div>
    }

    function SomeComponentContextMenu ({xPos, yPos, closeMenu}) {
      return <div> // Any wrapper should do
        <ContextMenu 
        ref={ref}
          xPos={some_number} 
          yPos={some_number}
        >
          <ContextMenuButton
            buttonText={someText}
            buttonAction={someFunction}
            closeMenu={closeMenu}
          />
        </ContextMenu>
      </div>
    }
*/

export function ContextMenu({ children, Reference, xPos, yPos, closeMenu }) {
  // Used for effect hook, down below
  const controlContextVisibility = () => {
    if (Reference === undefined) return;
    Reference.current.focus(); // focus necessary
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
      onClick={(e) => {
        buttonAction(e);
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
  border: 2px solid white;

  button {
    display: block;
    background-color: transparent;
    color: white;
    border: none;
    width: 100%;
  }
`;
