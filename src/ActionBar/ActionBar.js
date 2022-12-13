import React from 'react';
import { StyledActionBar } from './ActioBar.styled';
import { ExportDataButton } from './ExportDataButton';
import { ImportDataButton } from './ImportDataButton';

export function ActionBar({
  tableRows,
  setTableRows,
  headingOrder,
  setHeadingOrder,
  rowNumber,
  setRowNumber,
  showPreview,
  setShowPreview,
  title,
  setTitle,
}) {
  const togglePreview = (e) => {
    if (!showPreview) {
      setShowPreview(true);
      e.target.textContent = 'Hide Preview';
    } else {
      setShowPreview(false);
      e.target.textContent = 'Show Preview';
    }
  };

  const addColumn = () => {
    const newProp = `property ${headingOrder.length}`;

    // Update Headings
    setHeadingOrder(headingOrder.concat(newProp));

    // Update Rows
    setTableRows(
      tableRows.map((row) => {
        row[newProp] = '';
        return row;
      })
    );
  };

  const addRow = () => {
    const newRow = Object.fromEntries(
      headingOrder.map((heading) => [heading, ''])
    );
    setTableRows(tableRows.concat(newRow));
    setRowNumber(rowNumber + 1);
  };

  return (
    <StyledActionBar>
      <ImportDataButton
        {...{ setTableRows, setHeadingOrder, setRowNumber, setTitle }}
      />
      <ExportDataButton {...{ tableRows, headingOrder, rowNumber, title }} />
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
