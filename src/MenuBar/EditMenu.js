import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContextMenu, ContextMenuButton } from '../components/ContextMenu';
import {
  copyProperty,
  copyInstance,
  cutProperty,
  cutInstance,
  pasteProperty,
  pasteInstance,
  duplicateInstance,
  deleteProperty,
  deleteInstance,
} from '../app/slices/tableSlice';
import { StyledAnchorContainer } from './MenuBar.styled';

export const EditMenuAchonr = () => {
  const [dropdown, setDropdown] = useState(null);
  const Reference = useRef(null);
  const buttonReference = useRef(null);

  const createMenu = () => {
    const coords = buttonReference.current.getBoundingClientRect();
    const xPos = coords.left;
    const yPos = coords.bottom;
    setDropdown(
      <EditDropdown
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
        Edit
      </button>
      {dropdown}
    </StyledAnchorContainer>
  );
};

function EditDropdown({ xPos, yPos, Reference, closeMenu }) {
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.table.selected);
  const index = selected.index;

  const reducersBySelectedType = {
    property: {
      cut: () => dispatch(cutProperty({ propertyIndex: index })),
      copy: () => dispatch(copyProperty({ propertyIndex: index })),
      pasteBefore: () => dispatch(pasteProperty({ propertyIndex: index })),
      pasteAfter: () => dispatch(pasteProperty({ propertyIndex: index + 1 })),
      duplicate: () => {},
      delete: () => dispatch(deleteProperty({ propertyIndex: index })),
    },
    instance: {
      cut: () => dispatch(cutInstance({ instanceIndex: index })),
      copy: () => dispatch(copyInstance({ instanceIndex: index })),
      pasteBefore: () => dispatch(pasteInstance({ instanceIndex: index })),
      pasteAfter: () => dispatch(pasteInstance({ instanceIndex: index + 1 })),
      duplicate: () => dispatch(duplicateInstance({ instanceIndex: index })),
      delete: () => dispatch(deleteInstance({ instanceIndex: index })),
    },
  }[selected.type] ?? {
    cut: () => {},
    copy: () => {},
    duplicate: () => {},
    delete: () => {},
    pasteBefore: () => {},
    pasteAfter: () => {},
  };

  return (
    <ContextMenu {...{ xPos, yPos, Reference, closeMenu }}>
      <ContextMenuButton
        buttonText={'Cut'}
        buttonAction={reducersBySelectedType.cut}
        closeMenu={closeMenu}
      />
      <ContextMenuButton
        buttonText={'Copy'}
        buttonAction={reducersBySelectedType.copy}
        closeMenu={closeMenu}
      />
      <ContextMenuButton
        buttonText={'Paste before'}
        buttonAction={reducersBySelectedType.pasteBefore}
        closeMenu={closeMenu}
      />
      <ContextMenuButton
        buttonText={'Paste After'}
        buttonAction={reducersBySelectedType.pasteAfter}
        closeMenu={closeMenu}
      />
      <ContextMenuButton
        buttonText={'Duplicate'}
        buttonAction={reducersBySelectedType.duplicate}
        closeMenu={closeMenu}
      />
      <ContextMenuButton
        buttonText={'Delete'}
        buttonAction={reducersBySelectedType.delete}
        closeMenu={closeMenu}
      />
    </ContextMenu>
  );
}
