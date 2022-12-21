import { useRef, useState } from 'react';
import { ExportDataButton } from './ExportDataButton';
import { ImportDataButton } from './ImportDataButton';
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
      <ImportDataButton closeMenu={closeMenu} />
      <ExportDataButton closeMenu={closeMenu} />
    </ContextMenu>
  );
};
