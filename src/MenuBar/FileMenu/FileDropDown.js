import { ExportButton } from './ExportButton';
import { ImportButton } from './ImportButton';
import { newTable } from '../../redux/slices/tableSlice';
import { setModal } from '../../redux/slices/uiKnobsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { DropDown } from '../../components/DropDown.styles';
import { CloseTable } from '../../modals/CloseTableModal/CloseTableModal';
import { LanguageContext } from '../../App';
import { useContext } from 'react';

export const FileDropDown = ({ xPos, yPos }) => {
  const language = useContext(LanguageContext);
  const dispatch = useDispatch();
  const isTableEmpty = !Boolean(
    useSelector((state) => state.table.instances).length
  );
  return (
    <DropDown.Container {...{ xPos, yPos }}>
      <DropDown.Button onClick={() => dispatch(newTable())}>
        {language['newTable']}
      </DropDown.Button>
      <DropDown.HorRuler />
      <ImportButton />
      <DropDown.HorRuler />
      <ExportButton disabled={isTableEmpty} exportMode={'full'}>
        {language['exportFile']}
      </ExportButton>
      <ExportButton disabled={isTableEmpty} exportMode={'rows-only'}>
        {language['exportInstancesOnly']}
      </ExportButton>
      <DropDown.HorRuler />
      <DropDown.Button
        disabled={isTableEmpty}
        onClick={() => {
          dispatch(setModal({ modal: <CloseTable /> }));
        }}
      >
        {language['closeTable']}
      </DropDown.Button>
    </DropDown.Container>
  );
};
