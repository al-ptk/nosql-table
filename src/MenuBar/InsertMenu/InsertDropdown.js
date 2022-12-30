import { useDispatch, useSelector } from 'react-redux';
import { addInstance, addProperty } from '../../redux/slices/tableSlice';
import { setModal } from '../../redux/slices/uiKnobsSlice';
import { DropDown } from '../../components/DropDown.styles';
import MassInsertInput from '../../modals/MassInsertInput';
import { LanguageContext } from '../../App';
import { useContext } from 'react';

export function InsertDropdown({ xPos, yPos }) {
  const language = useContext(LanguageContext);
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.table.selected);
  const isTableEmpty = !Boolean(
    useSelector((state) => state.table.instances).length
  );

  return (
    <DropDown.Container {...{ xPos, yPos }}>
      <DropDown.Button
        disabled={isTableEmpty}
        onClick={() => dispatch(addProperty({}))}
      >
        {language['addNewProperty']}
      </DropDown.Button>
      <DropDown.Button
        disabled={isTableEmpty}
        onClick={() => dispatch(addInstance({}))}
      >
        {language['addNewInstance']}
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
        {language['insertFarAll']}
      </DropDown.Button>
    </DropDown.Container>
  );
}
