import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContextMenu, ContextMenuButton } from '../../components/ContextMenu';
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
} from '../../redux/slices/tableSlice';
import { StyledAnchorContainer } from '../MenuBar.styled';

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
    <div style={{ position: 'fixed', left: xPos, top: yPos }}>
      <button onClick={reducersBySelectedType.cut}>Cut</button>
      <button onClick={reducersBySelectedType.copy}>Copy</button>
      <button onClick={reducersBySelectedType.pasteBefore}>Paste Before</button>
      <button onClick={reducersBySelectedType.pasteAfter}>Paste After</button>
      <button onClick={reducersBySelectedType.duplicate}>Duplicate</button>
      <button onClick={reducersBySelectedType.delete}>Delete</button>
    </div>
  );
}
