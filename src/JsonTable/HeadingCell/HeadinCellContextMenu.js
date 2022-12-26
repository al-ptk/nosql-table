import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import {
  addProperty,
  copyProperty,
  cutProperty,
  deleteProperty,
  pasteProperty,
  swapProperties,
} from '../../redux/slices/tableSlice';
import { ContextMenu, ContextMenuButton } from '../../components/ContextMenu';
import { RepeatedInsertInput } from './RepeatedInsertInput';

export const HeadinCellContextMenu = ({
  xPos,
  yPos,
  closeMenu,
  propertyIndex,
  setRepeatModal,
}) => {
  const dispatch = useDispatch();
  propertyIndex = parseInt(propertyIndex);

  const Reference = useRef(null);

  return (
    <ContextMenu {...{ xPos, yPos, Reference }} closeMenu={closeMenu}>
      <ContextMenuButton
        buttonText={'Move back'}
        buttonAction={() => {
          dispatch(
            swapProperties({
              selectedIndex: propertyIndex,
              targetIndex: propertyIndex - 1,
            })
          );
        }}
        closeMenu={closeMenu}
      />
      <ContextMenuButton
        buttonText={'Move foward'}
        buttonAction={() => {
          dispatch(
            swapProperties({
              selectedIndex: propertyIndex,
              targetIndex: propertyIndex + 1,
            })
          );
        }}
        closeMenu={closeMenu}
      />
      <hr />
      <ContextMenuButton
        buttonText={'Cut'}
        buttonAction={() => {
          dispatch(cutProperty({ propertyIndex }));
        }}
        closeMenu={closeMenu}
      />
      <ContextMenuButton
        buttonText={'Copy'}
        buttonAction={() => {
          dispatch(copyProperty({ propertyIndex }));
        }}
        closeMenu={closeMenu}
      />
      <ContextMenuButton
        buttonText={'Paste Before'}
        buttonAction={() => {
          // Array.slice is used for including elements mid array
          // so pasting in the same index pushes the old element foward
          dispatch(pasteProperty({ propertyIndex }));
        }}
        closeMenu={closeMenu}
      />
      <ContextMenuButton
        buttonText={'Paste After'}
        buttonAction={() => {
          dispatch(pasteProperty({ propertyIndex: propertyIndex + 1 }));
        }}
        closeMenu={closeMenu}
      />
      <ContextMenuButton
        buttonText={'Delete'}
        buttonAction={() => {
          dispatch(deleteProperty({ propertyIndex }));
        }}
        closeMenu={closeMenu}
      />
      <hr />
      <ContextMenuButton
        buttonText={'Add Before'}
        buttonAction={() => {
          dispatch(addProperty({ propertyIndex }));
        }}
        closeMenu={closeMenu}
      />
      <ContextMenuButton
        buttonText={'Add After'}
        buttonAction={() => {
          dispatch(addProperty({ propertyIndex: propertyIndex + 1 }));
        }}
        closeMenu={closeMenu}
      />
      <ContextMenuButton
        buttonText={'Repeat For All'}
        buttonAction={() => {
          setRepeatModal(
            <RepeatedInsertInput {...{ propertyIndex, setRepeatModal }} />
          );
        }}
        closeMenu={closeMenu}
      />
    </ContextMenu>
  );
};
