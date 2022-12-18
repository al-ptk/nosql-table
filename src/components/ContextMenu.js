import styled from 'styled-components';
import { useContext } from 'react';

/*
  ContextMenu and ContextMenuButton are to belonog in a local context provider.
  Use them by composition, like this:

    function foo () {
      const ref = useRef(null);
      const closeContextMenu = () => {ref.current.remove()}/

      <div> // Any wrapper should do
        <ContextMenu 
          ReferenceContext={LocalContext} 
          xPos={some_number} 
          yPos={some_number}
        >
          <ContextMenu 
            buttonText={someText}
            buttonAction={someFunction}
            ReferenceContext={LocalContext}
          />
        </ContextMenu>
      </div>
    }
*/

export function ContextMenu({ children, ReferenceContext, xPos, yPos }) {
  const { ref } = useContext(ReferenceContext);
  return (
    <StyledMenu
      ref={ref}
      xPos={!isNaN(xPos) ? `${xPos}px` : 'inherit'}
      yPos={!isNaN(yPos) ? `${yPos}px` : 'inherit'}
    >
      {children}
    </StyledMenu>
  );
}

export const ContextMenuButton = ({
  buttonText,
  buttonAction,
  ReferenceContext,
}) => {
  const { closeContextMenu } = useContext(ReferenceContext);
  return (
    <button
      onClick={() => {
        buttonAction();
        closeContextMenu();
      }}
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
