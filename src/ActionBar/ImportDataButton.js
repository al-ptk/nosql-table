import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { importTable } from '../app/slices/tableSlice';

export function ImportDataButton() {
  const dispatch = useDispatch();
  const fileInput = useRef();

  const selectFile = () => {
    fileInput.current.click();
  };

  const importFile = () => {
    const reader = new FileReader();
    reader.readAsText(fileInput.current.files[0]);
    reader.onload = function () {
      const newTable = JSON.parse(reader.result);
      dispatch(importTable({ newTable }));
    };
  };

  return (
    <span>
      <input
        id="fileInput"
        type="file"
        accept=".jte .json"
        style={{ display: 'none' }}
        ref={fileInput}
        onChange={() => {
          importFile();
        }}
      />
      <button onClick={selectFile} className="btn btn-primary">
        Import Data
      </button>
    </span>
  );
}
