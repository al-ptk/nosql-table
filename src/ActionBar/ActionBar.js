import React from 'react';
import { StyledActionBar } from './ActioBar.styled';
import { ExportDataButton } from './ExportDataButton';
import { ImportDataButton } from './ImportDataButton';

export function ActionBar({
  tableData,
  setTableData,
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
    setTableData({ ...tableData, [newProp]: Array(rowNumber).fill('') });
    setHeadingOrder(headingOrder.concat(newProp));
  };

  const addRow = () => {
    const newTableData = Object.fromEntries(
      Object.entries(tableData).map((entry) => [entry[0], entry[1].concat('')])
    );
    setRowNumber(rowNumber + 1);
    setTableData(newTableData);
  };

  return (
    <StyledActionBar>
      <ImportDataButton
        {...{ setTableData, setHeadingOrder, setRowNumber, setTitle }}
      />
      <ExportDataButton {...{ tableData, headingOrder, rowNumber, title }} />
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
