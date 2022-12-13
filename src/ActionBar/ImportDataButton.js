import React, { useContext, useRef } from 'react';
import { AppStateContext } from '../App';

export function ImportDataButton() {
  const { importTable } = useContext(AppStateContext);

  const fileInput = useRef();

  const selectFile = () => {
    fileInput.current.click();
  };

  return (
    <span>
      <input
        type="file"
        accept="application/json"
        style={{ display: 'none' }}
        ref={fileInput}
        onChange={() => {
          importTable(fileInput);
        }}
      />
      <button onClick={selectFile} className="btn btn-primary">
        Import Data
      </button>
    </span>
  );
}
