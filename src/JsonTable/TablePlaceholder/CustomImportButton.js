import React, { useContext, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { LanguageContext } from '../../App';
import { importTable } from '../../redux/slices/tableSlice';
import { StyledTP } from './TablePlaceholder.styles';

export const CustomImportButton = () => {
  const language = useContext(LanguageContext);
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
      const fileName = fileInput.current.files[0].name.slice(
        0,
        -'.json'.length
      );
      dispatch(importTable({ newTable, fileName }));
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
          const fileName = fileInput.current.files[0].name.slice(
            0,
            -'.json'.length
          );
          importFile({ fileName });
        }}
      />
      <StyledTP.Button onClick={() => selectFile()}>
        {language['importFile']}
      </StyledTP.Button>
    </span>
  );
};
