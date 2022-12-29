import { useRef, useState } from 'react';
import { ExportButton } from './ExportButton';
import { ImportButton } from './ImportButton';
import { newTable } from '../../redux/slices/tableSlice';
import { setModal } from '../../redux/slices/uiKnobsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { DropDown, DropDownAnchor } from '../../components/DropDown.styles';
import { CloseTable } from '../../modals/CloseTableModal/CloseTableModal';

export const FileMenuAnchor = () => {
  const [dropdown, setDropdown] = useState(null);
  const buttonReference = useRef(null);

  const createMenu = () => {
    const coords = buttonReference.current.getBoundingClientRect();
    const xPos = coords.left;
    const yPos = coords.bottom;
    setDropdown(
      <FileDropDown {...{ xPos, yPos }} closeMenu={() => setDropdown(null)} />
    );
  };

  return (
    <DropDownAnchor.Container
      onMouseOver={createMenu}
      onMouseLeave={() => {
        setDropdown(null);
      }}
    >
      <DropDownAnchor.Button ref={buttonReference}>File</DropDownAnchor.Button>
      {dropdown}
    </DropDownAnchor.Container>
  );
};

const FileDropDown = ({ xPos, yPos }) => {
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
