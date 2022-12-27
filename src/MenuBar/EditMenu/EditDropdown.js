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
} from '../../redux/slices/tableSlice';
import { DropDown } from '../../components/DropDown.styles';

export function EditDropdown({ xPos, yPos }) {
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.table.selected);
  const index = selected.index;

  // Select the functions to render based on the type of entity selected
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
    <DropDown.Container {...{ xPos, yPos }}>
      <DropDown.Button
        onClick={(e) => {
          reducersBySelectedType.cut();
          dispatch(setSelected({ type: null, index: null }));
        }}
        disabled={selected.type === null}
      >
        Cut
      </DropDown.Button>
      <DropDown.Button
        onClick={reducersBySelectedType.copy}
        disabled={selected.type === null}
      >
        Copy
      </DropDown.Button>
      <DropDown.Button
        onClick={reducersBySelectedType.pasteBefore}
        disabled={selected.type === null}
      >
        Paste Before
      </DropDown.Button>
      <DropDown.Button
        onClick={reducersBySelectedType.pasteAfter}
        disabled={selected.type === null}
      >
        Paste After
      </DropDown.Button>
      <DropDown.Button
        onClick={reducersBySelectedType.duplicate}
        disabled={selected.type === null || selected.type !== 'instance'}
      >
        Duplicate
      </DropDown.Button>
      <DropDown.Button
        onClick={reducersBySelectedType.delete}
        disabled={selected.type === null}
      >
        Delete
      </DropDown.Button>
    </DropDown.Container>
  );
}
