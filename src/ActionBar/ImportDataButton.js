import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { importTable } from '../app/slices/tableSlice';

export function ImportDataButton(props) {
  console.log(props.menuRef);
  const dispatch = useDispatch();
  const fileInput = useRef(null);

  const selectFile = () => {
    fileInput.current.click();
  };

  const importFile = () => {
    const reader = new FileReader();
    reader.readAsText(fileInput.current.files[0]);
    reader.onload = function () {
      const newTable = JSON.parse(reader.result);
      console.log(newTable);
      dispatch(importTable({ newTable }));
    };
  };

  return (
    <span>
      <input
        type="file"
        accept="application/json"
        style={{ display: 'none' }}
        ref={fileInput}
        onChange={(e) => {
          importFile();
        }}
      />
      <button onClick={selectFile} className="btn btn-primary">
        Import Data
      </button>
    </span>
  );
}
