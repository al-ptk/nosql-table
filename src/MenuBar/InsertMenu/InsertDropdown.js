import { useDispatch, useSelector } from 'react-redux';
import { addInstance, addProperty } from '../../redux/slices/tableSlice';
import { DropDown } from '../../components/DropDown.styles';
import { RepeatedInsertInput } from '../../components/RepeatedInsertInput/RepeatedInsertInput';

export function InsertDropdown({ xPos, yPos, setModal }) {
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.table.selected);

  return (
    <DropDown.Container {...{ xPos, yPos }}>
      <DropDown.Button onClick={() => dispatch(addProperty({}))}>
        Add new property
      </DropDown.Button>
      <DropDown.Button onClick={() => dispatch(addInstance({}))}>
        Add new instance
      </DropDown.Button>
      <DropDown.HorRuler />
      <DropDown.Button
        onClick={() => {
          if (selected.index === null || selected.type !== 'property') return;
          dispatch(
            setModal({
              modal: (
                <RepeatedInsertInput {...{ propertyIndex: selected.index }} />
              ),
            })
          );
        }}
        disabled={selected.index === null || selected.type !== 'property'}
      >
        Insert for all cells of property
      </DropDown.Button>
    </DropDown.Container>
  );
}
