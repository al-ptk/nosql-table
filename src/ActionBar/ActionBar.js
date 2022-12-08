import React, { useRef } from 'react';
import { columnfy, getAllKeys, objectify } from '../helperFunctions';
import { StyledActionBar } from './ActioBar.styled';

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

function ImportDataButton({
  setTableData,
  setHeadingOrder,
  setRowNumber,
  setTitle,
}) {
  const fileInput = useRef();

  const selectFile = () => {
    fileInput.current.click();
  };

  const setupTable = () => {
    const reader = new FileReader();
    reader.readAsText(fileInput.current.files[0]);
    reader.onload = function () {
      const newTable = JSON.parse(reader.result);
      setHeadingOrder(getAllKeys(newTable));
      setTableData(columnfy(newTable));
      setRowNumber(newTable.length);
      setTitle(fileInput.current.files[0].name.slice(0, -'.json'.length));
    };
  };

  return (
    <span>
      <input
        type="file"
        accept="application/json"
        style={{ display: 'none' }}
        ref={fileInput}
        onChange={setupTable}
      />
      <button onClick={selectFile} className="btn btn-primary">
        Import Data
      </button>
    </span>
  );
}

function ExportDataButton({ tableData, rowNumber, headingOrder, title }) {
  const linkRef = useRef(null);

  const downloadTable = () => {
    const json = JSON.stringify(
      objectify(tableData, rowNumber, headingOrder, title)
    );
    const file = new File([json], `${title}.json`, {
      type: 'application/json',
    });
    linkRef.current.href = URL.createObjectURL(file);
    linkRef.current.click();
  };

  return (
    <span>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a
        href="#"
        target={'_blank'}
        ref={linkRef}
        style={{ display: 'none' }}
        download={`${title}.json`}
      >
        &nbsp;
      </a>
      <button onClick={downloadTable} className="btn btn-primary">
        Export Data
      </button>
    </span>
  );
}
