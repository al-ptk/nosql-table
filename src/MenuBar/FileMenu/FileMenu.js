import { useRef, useState } from 'react';
import { ExportButton } from './ExportButton';
import { ImportButton } from './ImportButton';
import { newTable } from '../../redux/slices/tableSlice';
import { useDispatch } from 'react-redux';
import { DropDown, DropDownAnchor } from '../../components/DropDown.styles';

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
  return (
    <DropDown.Container {...{ xPos, yPos }}>
      <DropDown.Button onClick={() => dispatch(newTable())}>
        New Table
      </DropDown.Button>
      <DropDown.HozRuler />
      <ImportButton />
      <ExportButton exportMode={'full'}>Export file</ExportButton>
      <ExportButton exportMode={'rows-only'}>Export only rows</ExportButton>
      <DropDown.HozRuler />
      <DropDown.Button>Close Table</DropDown.Button>
    </DropDown.Container>
  );
};
