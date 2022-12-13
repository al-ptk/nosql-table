import { useContext } from 'react';
import { AppStateContext } from '../App';
import { StyledActionBar } from './ActioBar.styled';
import { ExportDataButton } from './ExportDataButton';
import { ImportDataButton } from './ImportDataButton';

export function ActionBar() {
  const { addRow, addColumn, title, setTitle, showPreview, setShowPreview } =
    useContext(AppStateContext);

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
      <ImportDataButton />
      <ExportDataButton />
      <input
        type={'text'}
        value={title}
        onInput={(e) => setTitle(e.target.value)}
        className="title"
      />
      <button onClick={addColumn}>Add Column</button>
      <button onClick={addRow}>Add Row</button>
      <button onClick={togglePreview}>Show Preview</button>
    </StyledActionBar>
  );
}
