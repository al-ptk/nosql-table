import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  updateTitle,
  newTable,
  addInstance,
  addProperty,
} from '../app/slices/tableSlice';
import { StyledMenuBar } from './MenuBar.styled';
import { ExportDataButton } from './ExportDataButton';
import { ImportDataButton } from './ImportDataButton';
import { ContextMenu, ContextMenuButton } from '../components/ContextMenu';

export default function MenuBar() {
  const [showPreview, setShowPreview] = useState(false);

  const togglePreview = (e) => {
    if (!showPreview) {
      setShowPreview(true);
      e.target.textContent = 'Hide Preview';
    } else {
      setShowPreview(false);
      e.target.textContent = 'Show Preview';
    }
  };

  return (
    <StyledMenuBar>
      <FileButton />
      <EditButton />
      <InsertButton />
      <TitleEdit />
      <button onClick={togglePreview}>Preview</button>
    </StyledMenuBar>
  );
}

const TitleEdit = () => {
  const dispatch = useDispatch();
  const title = useSelector((state) => state.table.title);
  return (
    <input
      type={'text'}
      value={title}
      onInput={(e) => dispatch(updateTitle({ newTitle: e.target.value }))}
      className="title"
    />
  );
};

const FileButton = () => {
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
      <ImportDataButton closeMenu={closeMenu} />
      <ExportDataButton closeMenu={closeMenu} />
    </ContextMenu>
  );
};

const EditButton = () => {
  return (
    <button name={'Edit'}>
      <button>Cut</button>
      <button>Copy</button>
      <button>Paste</button>
      <button>Duplicate</button>
    </button>
  );
};

const InsertButton = () => {
  const dispatch = useDispatch();
  return (
    <button name={'Insert'}>
      <button onClick={() => dispatch(addProperty({}))}>
        Add New Property
      </button>
      <button onClick={() => dispatch(addInstance({}))}>
        Add New Instance
      </button>
    </button>
  );
};
