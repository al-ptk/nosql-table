import { useContext, useRef } from 'react';
import { useDispatch } from 'react-redux';
import {
  addProperty,
  copyProperty,
  cutProperty,
  deleteProperty,
  pasteProperty,
  replaceProperty,
  swapProperties,
} from '../../redux/slices/tableSlice';
import {
  ContextMenu,
  ContextMenuButton,
} from '../../components/ContextMenu/ContextMenu';
import { setModal } from '../../redux/slices/uiKnobsSlice';
import MassInsertInput from '../../modals/MassInsertInput';
import { LanguageContext } from '../../App';

export const HeadinCellContextMenu = ({
  xPos,
  yPos,
  closeMenu,
  propertyIndex,
}) => {
  const language = useContext(LanguageContext);
  const dispatch = useDispatch();
  propertyIndex = parseInt(propertyIndex);

  const Reference = useRef(null);

  return (
    <ContextMenu {...{ xPos, yPos, Reference }} closeMenu={closeMenu}>
      <ContextMenuButton
        buttonText={language['moveBackwards']}
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
        buttonText={language['moveForwards']}
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
        buttonText={language['cut']}
        buttonAction={() => {
          dispatch(cutProperty({ propertyIndex }));
        }}
        closeMenu={closeMenu}
      />
      <ContextMenuButton
        buttonText={language['copy']}
        buttonAction={() => {
          dispatch(copyProperty({ propertyIndex }));
        }}
        closeMenu={closeMenu}
      />
      <ContextMenuButton
        buttonText={language['pasteIn']}
        buttonAction={() => {
          dispatch(replaceProperty({ propertyIndex }));
        }}
        closeMenu={closeMenu}
      />
      <ContextMenuButton
        buttonText={language['pasteBefore']}
        buttonAction={() => {
          dispatch(pasteProperty({ propertyIndex }));
        }}
        closeMenu={closeMenu}
      />
      <ContextMenuButton
        buttonText={language['pasteAfter']}
        buttonAction={() => {
          dispatch(pasteProperty({ propertyIndex: propertyIndex + 1 }));
        }}
        closeMenu={closeMenu}
      />
      <ContextMenuButton
        buttonText={language['delete']}
        buttonAction={() => {
          dispatch(deleteProperty({ propertyIndex }));
        }}
        closeMenu={closeMenu}
      />
      <hr />
      <ContextMenuButton
        buttonText={language['addBefore']}
        buttonAction={() => {
          dispatch(addProperty({ propertyIndex }));
        }}
        closeMenu={closeMenu}
      />
      <ContextMenuButton
        buttonText={language['addAfter']}
        buttonAction={() => {
          dispatch(addProperty({ propertyIndex: propertyIndex + 1 }));
        }}
        closeMenu={closeMenu}
      />
      <ContextMenuButton
        buttonText={language['insertForAll']}
        buttonAction={() => {
          dispatch(
            setModal({
              modal: <MassInsertInput {...{ propertyIndex }} />,
            })
          );
        }}
        closeMenu={closeMenu}
      />
    </ContextMenu>
  );
};
