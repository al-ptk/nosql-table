import { useDispatch, useSelector } from 'react-redux';
import { addInstance, addProperty } from '../../redux/slices/tableSlice';
import { setModal } from '../../redux/slices/uiKnobsSlice';
import { DropDown } from '../../components/DropDown.styles';
import MassInsertInput from '../../modals/MassInsertInput';

export function InsertDropdown({ xPos, yPos }) {
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
              modal: <MassInsertInput {...{ propertyIndex: selected.index }} />,
            })
          );
        }}
        disabled={selected.index === null || selected.type !== 'property'}
      >
        Insert for all
      </DropDown.Button>
    </DropDown.Container>
  );
}
