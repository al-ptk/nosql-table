import { useRef, useState } from 'react';
import { ExportButton } from './ExportButton';
import { ImportButton } from './ImportButton';
import { ContextMenu, ContextMenuButton } from '../../components/ContextMenu';
import { newTable } from '../../redux/slices/tableSlice';
import { useDispatch } from 'react-redux';
import { StyledAnchorContainer } from '../MenuBar.styled';

export const FileMenuAnchor = () => {
  const [dropdown, setDropdown] = useState(null);
  const Reference = useRef(null);
  const buttonReference = useRef(null);

  const createMenu = () => {
    const coords = buttonReference.current.getBoundingClientRect();
    const xPos = coords.left;
    const yPos = coords.bottom;
    setDropdown(
      <FileDropDown
        {...{ xPos, yPos, Reference }}
        closeMenu={() => setDropdown(null)}
      />
    );
  };

  return (
    <StyledAnchorContainer
      onMouseOver={createMenu}
      onMouseLeave={() => {
        setDropdown(null);
      }}
    >
      <button onClick={createMenu} ref={buttonReference}>
        File
      </button>
      {dropdown}
    </StyledAnchorContainer>
  );
};

const FileDropDown = ({ xPos, yPos, Reference, closeMenu }) => {
  const dispatch = useDispatch();
  return (
    <ContextMenu {...{ xPos, yPos, Reference, closeMenu }}>
      <ContextMenuButton
        buttonText={'New Table'}
        buttonAction={() => dispatch(newTable())}
        closeMenu={closeMenu}
      />
      <hr />
      <ImportButton closeMenu={closeMenu} />
      <ExportButton closeMenu={closeMenu} exportMode={'full'}>
        Export file
      </ExportButton>
      <ExportButton closeMenu={closeMenu} exportMode={'rows-only'}>
        Export only rows
      </ExportButton>
    </ContextMenu>
  );
};
