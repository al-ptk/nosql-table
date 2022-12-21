import { useRef, useState } from 'react';
import { ExportButton } from './ExportButton';
import { ImportButton } from './ImportButton';
import { ContextMenu, ContextMenuButton } from '../components/ContextMenu';
import { newTable } from '../app/slices/tableSlice';
import { useDispatch } from 'react-redux';

export const FileMenuAnchor = () => {
  const [dropdown, setDropdown] = useState(null);
  const Reference = useRef(null);

  return (
    <div>
      <button
        onClick={(e) => {
          const coords = e.target.getBoundingClientRect();
          const xPos = coords.left;
          const yPos = coords.bottom;
          setDropdown(
            <FileDropDown
              {...{ xPos, yPos, Reference }}
              closeMenu={() => setDropdown(null)}
            />
          );
        }}
      >
        File
      </button>
      {dropdown}
    </div>
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
