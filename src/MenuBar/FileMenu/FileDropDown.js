import { ExportButton } from './ExportButton';
import { ImportButton } from './ImportButton';
import { newTable } from '../../redux/slices/tableSlice';
import { setModal } from '../../redux/slices/uiKnobsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { DropDown } from '../../components/DropDown.styles';
import { CloseTable } from '../../modals/CloseTableModal/CloseTableModal';

export const FileDropDown = ({ xPos, yPos }) => {
  const dispatch = useDispatch();
  const isTableEmpty = !Boolean(
    useSelector((state) => state.table.instances).length
  );
  return (
    <DropDown.Container {...{ xPos, yPos }}>
      <DropDown.Button onClick={() => dispatch(newTable())}>
        New Table
      </DropDown.Button>
      <DropDown.HorRuler />
      <ImportButton />
      <DropDown.HorRuler />
      <ExportButton disabled={isTableEmpty} exportMode={'full'}>
        Export file
      </ExportButton>
      <ExportButton disabled={isTableEmpty} exportMode={'rows-only'}>
        Export only rows
      </ExportButton>
      <DropDown.HorRuler />
      <DropDown.Button
        disabled={isTableEmpty}
        onClick={() => {
          dispatch(setModal({ modal: <CloseTable /> }));
        }}
      >
        Close Table
      </DropDown.Button>
    </DropDown.Container>
  );
};
