import { useDispatch, useSelector } from 'react-redux';
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
  setSelected,
  swapProperties,
  swapInstances,
  replaceProperty,
  replaceInstance,
} from '../../redux/slices/tableSlice';
import { DropDown } from '../../components/DropDown.styles';
import { LanguageContext } from '../../App';
import { useContext } from 'react';

export function EditDropdown({ xPos, yPos, closeDropDown }) {
  const language = useContext(LanguageContext);
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.table.selected);
  const index = selected.index;
  const clipboard = useSelector((state) => state.table.clipboard);
  const isClipboardEmpty = clipboard.data === null;

  const clearSelected = () => {
    dispatch(setSelected({ type: null, index: null }));
    closeDropDown();
  };

  // Select the functions to be implemented by the buttonsbased on the
  // type of entity selected. If property, then get property functions.
  // Same for instances.
  // @dryup @tableActions centralize the list of actions. Affected: EditDropDown, InsertDropDown and context menus. (Look at other reminders with @tableActions for more context)
  const reducersBySelectedType = {
    property: {
      moveBackwards: () => {
        dispatch(
          swapProperties({
            selectedIndex: index,
            targetIndex: index - 1,
          })
        );
        clearSelected();
      },
      moveForwards: () => {
        dispatch(
          swapProperties({
            selectedIndex: index,
            targetIndex: index + 1,
          })
        );
        clearSelected();
      },
      cut: () => {
        dispatch(cutProperty({ propertyIndex: index }));
        clearSelected();
      },
      copy: () => {
        dispatch(copyProperty({ propertyIndex: index }));
        clearSelected();
      },
      pasteIn: () => {
        dispatch(replaceProperty({ propertyIndex: index }));
        clearSelected();
      },
      pasteBefore: () => {
        dispatch(pasteProperty({ propertyIndex: index }));
        clearSelected();
      },
      pasteAfter: () => {
        dispatch(pasteProperty({ propertyIndex: index + 1 }));
        clearSelected();
      },
      duplicate: () => {},
      delete: () => {
        dispatch(deleteProperty({ propertyIndex: index }));
        clearSelected();
      },
    },
    instance: {
      moveBackwards: () => {
        dispatch(
          swapInstances({
            selectedIndex: index,
            targetIndex: index - 1,
          })
        );
        clearSelected();
      },
      moveForwards: () => {
        dispatch(
          swapInstances({
            selectedIndex: index,
            targetIndex: index + 1,
          })
        );
        clearSelected();
      },
      cut: () => {
        dispatch(cutInstance({ instanceIndex: index }));
        clearSelected();
      },
      copy: () => {
        dispatch(copyInstance({ instanceIndex: index }));
        clearSelected();
      },
      pasteIn: () => {
        dispatch(replaceInstance({ instanceIndex: index }));
        clearSelected();
      },
      pasteBefore: () => {
        dispatch(pasteInstance({ instanceIndex: index }));
        clearSelected();
      },
      pasteAfter: () => {
        dispatch(pasteInstance({ instanceIndex: index + 1 }));
        clearSelected();
      },
      duplicate: () => {
        dispatch(duplicateInstance({ instanceIndex: index }));
        clearSelected();
      },
      delete: () => {
        dispatch(deleteInstance({ instanceIndex: index }));
        clearSelected();
      },
    },
  }[selected.type] ?? {
    moveBackwards: () => {},
    moveForwards: () => {},
    cut: () => {},
    copy: () => {},
    duplicate: () => {},
    delete: () => {},
    pasteIn: () => {},
    pasteBefore: () => {},
    pasteAfter: () => {},
  };

  return (
    <DropDown.Container {...{ xPos, yPos }}>
      <DropDown.Button
        disabled={selected.type === null || selected.type !== clipboard.type}
        onClick={reducersBySelectedType.moveBackwards}
      >
        {language['moveBackwards']}
      </DropDown.Button>
      <DropDown.Button
        disabled={selected.type === null}
        onClick={reducersBySelectedType.moveForwards}
      >
        {language['moveForwards']}
      </DropDown.Button>
      <DropDown.HorRuler />
      <DropDown.Button
        onClick={() => reducersBySelectedType.cut}
        disabled={selected.type === null}
      >
        {language['cut']}
      </DropDown.Button>
      <DropDown.Button
        onClick={reducersBySelectedType.copy}
        disabled={selected.type === null}
      >
        {language['copy']}
      </DropDown.Button>
      <DropDown.Button
        disabled={selected.type === null || isClipboardEmpty}
        onClick={reducersBySelectedType.pasteIn}
      >
        {language['pasteIn']}
      </DropDown.Button>
      <DropDown.Button
        onClick={reducersBySelectedType.pasteBefore}
        disabled={selected.type === null || isClipboardEmpty}
      >
        {language['pasteBefore']}
      </DropDown.Button>
      <DropDown.Button
        onClick={reducersBySelectedType.pasteAfter}
        disabled={selected.type === null || isClipboardEmpty}
      >
        {language['pasteAfter']}
      </DropDown.Button>
      <DropDown.Button
        onClick={reducersBySelectedType.duplicate}
        disabled={selected.type !== 'instance'}
      >
        {language['duplicate']}
      </DropDown.Button>
      <DropDown.Button
        onClick={reducersBySelectedType.delete}
        disabled={selected.type === null}
      >
        {language['delete']}
      </DropDown.Button>
    </DropDown.Container>
  );
}
