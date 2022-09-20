import React from 'react';

export function ActionBar({
  tableData,
  setTableData,
  headingOrder,
  setHeadingOrder,
  rowNumber,
  setRowNumber,
  showPreview,
  setShowPreview,
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
    setTableData({ ...tableData, '': Array(rowNumber).fill('') });
    setHeadingOrder(headingOrder.concat(''));
  };

  const addRow = () => {
    const newTableData = Object.fromEntries(
      Object.entries(tableData).map((entry) => [
        entry[0],
        entry[1].concat(''),
      ])
    );
    setRowNumber(rowNumber + 1);
    setTableData(newTableData);
  };

  return (
    <div>
      <button onClick={addColumn}>Add Column</button>
      <button onClick={addRow}>Add Row</button>
      <button>Import Data</button>
      <button>Export Data</button>
      <button onClick={togglePreview}>Show Preview</button>
    </div>
  );
}
