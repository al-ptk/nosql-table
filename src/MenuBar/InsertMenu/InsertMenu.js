import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addInstance, addProperty } from '../../redux/slices/tableSlice';
import { ContextMenu, ContextMenuButton } from '../../components/ContextMenu';
import { createRoot } from 'react-dom/client';
import { StyledAnchorContainer } from '../MenuBar.styled';

export const InsertMenuAnchor = () => {
  const [dropdown, setDropdown] = useState(null);
  const Reference = useRef(null);
  const buttonReference = useRef(null);

  const createMenu = () => {
    const coords = buttonReference.current.getBoundingClientRect();
    const xPos = coords.left;
    const yPos = coords.bottom;
    setDropdown(
      <InsertDropdown
        {...{ xPos, yPos, Reference }}
        closeMenu={() => setDropdown(null)}
      />
    );
  };

  return (
    <StyledAnchorContainer
      onMouseOver={createMenu}
      onMouseLeave={() => {
        setDropdown(null);
      }}
    >
      <button onClick={createMenu} ref={buttonReference}>
        Insert
      </button>
      {dropdown}
    </StyledAnchorContainer>
  );
};

function InsertDropdown({ xPos, yPos, Reference, closeMenu }) {
  const dispatch = useDispatch();
  return (
    <ContextMenu {...{ xPos, yPos, Reference, closeMenu }}>
      <ContextMenuButton
        buttonText={'Add new property'}
        buttonAction={() => dispatch(addProperty({}))}
        closeMenu={closeMenu}
      />
      <ContextMenuButton
        buttonText={'Add new instance'}
        buttonAction={() => dispatch(addInstance({}))}
        closeMenu={closeMenu}
      />
      <hr />
      <ContextMenuButton
        buttonText={'Insert for all in property'}
        buttonAction={() => {
          let node = document.createElement('div');
          document.body.appendChild(node);
          createRoot(node).render(
            <button onClick={(e) => e.target.remove()}>Delete me</button>
          );
        }}
        closeMenu={closeMenu}
      />
    </ContextMenu>
  );
}
