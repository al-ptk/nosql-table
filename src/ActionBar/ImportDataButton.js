import React, { useRef } from 'react';
import { columnfy, getAllKeys } from '../utils/helperFunctions';

export function ImportDataButton({
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
