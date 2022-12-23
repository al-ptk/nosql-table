import { useEffect } from 'react';
import styled from 'styled-components';

/*
  The idea of the ContextMenu component is to create a vertical list of buttons at any position of the viewport, like all context menus found in modern, GUI-based computers.

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
          <ContextMenuButton
            buttonText={someOtherText}
            buttonAction={someFunction}
            closeMenu={closeMenu}
          />
        </ContextMenu>
      </div>
    }
*/

export function ContextMenu({ children, Reference, xPos, yPos, closeMenu }) {
  const controlContextVisibility = () => {
    if (Reference === undefined) return;
    document.body.click(); // closes other menus
    Reference.current.focus();
    const closeMenuOnOutsideClick = (e) => {
      const isFocusWithin = Reference.current.contains(document.activeElement);
      if (!isFocusWithin) {
        closeMenu();
      }
    };
    window.addEventListener('click', closeMenuOnOutsideClick);
    window.addEventListener('contextmenu', closeMenuOnOutsideClick);
    return () => {
      window.removeEventListener('click', closeMenuOnOutsideClick);
      window.removeEventListener('contextmenu', closeMenuOnOutsideClick);
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
