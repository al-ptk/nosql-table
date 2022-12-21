import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import {
  addProperty,
  copyProperty,
  cutProperty,
  deleteProperty,
  pasteProperty,
  swapProperties,
} from '../app/slices/tableSlice';
import { ContextMenu, ContextMenuButton } from '../components/ContextMenu';

export const HeadinCellContextMenu = ({
  xPos,
  yPos,
  closeMenu,
  propertyIndex,
}) => {
  const dispatch = useDispatch();
  propertyIndex = parseInt(propertyIndex);

  const Reference = useRef(null);

  // ----------- Functions for each button of the menu --------
  const addBefore = () => {
    dispatch(addProperty({ propertyIndex }));
  };

  const addAfter = () => {
    dispatch(addProperty({ propertyIndex: propertyIndex + 1 }));
  };

  const moveBefore = () => {
    dispatch(
      swapProperties({
        selectedIndex: propertyIndex,
        targetIndex: propertyIndex - 1,
      })
    );
  };

  const moveAfter = () => {
    dispatch(
      swapProperties({
        selectedIndex: propertyIndex,
        targetIndex: propertyIndex + 1,
      })
    );
  };

  const selfDelete = () => {
    dispatch(deleteProperty({ propertyIndex }));
  };

  const copy = () => {
    dispatch(copyProperty({ propertyIndex }));
  };

  const cut = () => {
    dispatch(cutProperty({ propertyIndex }));
  };

  const pasteBefore = () => {
    // Array.slice is used for including elements mid array
    // so pasting in the same index pushes the old element foward
    dispatch(pasteProperty({ propertyIndex }));
  };

  const pasteAfter = () => {
    dispatch(pasteProperty({ propertyIndex: propertyIndex + 1 }));
  };

  return (
    <ContextMenu {...{ xPos, yPos, Reference }} closeMenu={closeMenu}>
      <ContextMenuButton
        closeMenu={closeMenu}
        buttonText={'Move back'}
        buttonAction={moveBefore}
      />
      <ContextMenuButton
        closeMenu={closeMenu}
        buttonText={'Move foward'}
        buttonAction={moveAfter}
      />
      <hr />
      <ContextMenuButton
        closeMenu={closeMenu}
        buttonText={'Cut'}
        buttonAction={cut}
      />
      <ContextMenuButton
        closeMenu={closeMenu}
        buttonText={'Copy'}
        buttonAction={copy}
      />
      <ContextMenuButton
        closeMenu={closeMenu}
        buttonText={'Paste Before'}
        buttonAction={pasteBefore}
      />
      <ContextMenuButton
        closeMenu={closeMenu}
        buttonText={'Paste After'}
        buttonAction={pasteAfter}
      />
      <ContextMenuButton
        closeMenu={closeMenu}
        buttonText={'Delete'}
        buttonAction={selfDelete}
      />
      <hr />
      <ContextMenuButton
        closeMenu={closeMenu}
        buttonText={'Add Before'}
        buttonAction={addBefore}
      />
      <ContextMenuButton
        closeMenu={closeMenu}
        buttonText={'Add After'}
        buttonAction={addAfter}
      />
      <ContextMenuButton
        buttonText={'Insert for all'}
        closeMenu={closeMenu}
        buttonAction={(e) => {
          alert('hey!');
        }}
      />
    </ContextMenu>
  );
};
