import React from 'react';
import { useDispatch } from 'react-redux';
import { importTable } from '../../redux/slices/tableSlice';

export default function HiddenFileImporter() {
  const dispatch = useDispatch();

  const importFile = (importedFile) => {
    const reader = new FileReader();
    reader.readAsText(importedFile);
    reader.onload = function () {
      const newTable = JSON.parse(reader.result);
      const fileName = importedFile.name.slice(0, -'.json'.length);
      dispatch(importTable({ newTable, fileName }));
    };
  };

  return (
    <input
      id="hidden-file-importer"
      type="file"
      accept="application/json"
      style={{ display: 'none' }}
      onChange={(e) => {
        const importedFile = e.target.files[0];
        importFile(importedFile);
      }}
    />
  );
}
