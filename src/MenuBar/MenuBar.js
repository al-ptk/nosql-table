import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  updateTitle,
  newTable,
  addInstance,
  addProperty,
} from '../app/slices/tableSlice';
import { StyledActionBar } from './MenuBar.styled';
import MenuBarButton from './MenuBarDropDown';
import { ExportDataButton } from './ExportDataButton';
import { ImportDataButton } from './ImportDataButton';

export default function MenuBar() {
  const [showPreview, setShowPreview] = useState(false);
  const title = useSelector((state) => state.table.title);
  const dispatch = useDispatch();

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
    <StyledActionBar>
      <MenuBarButton name={'file'}>
        <button onClick={() => dispatch(newTable())}>New Table</button>
        <ImportDataButton />
        <ExportDataButton />
      </MenuBarButton>
      <input
        type={'text'}
        value={title}
        onInput={(e) => dispatch(updateTitle({ newTitle: e.target.value }))}
        className="title"
      />
      <button onClick={() => dispatch(addProperty({}))}>
        Add New Property
      </button>
      <button onClick={() => dispatch(addInstance({}))}>
        Add New Instance
      </button>
      <button onClick={togglePreview}>Show Preview</button>
    </StyledActionBar>
  );
}
