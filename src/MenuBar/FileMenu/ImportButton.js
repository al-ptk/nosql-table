import React, { useContext, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { importTable } from '../../redux/slices/tableSlice';
import { DropDown } from '../../components/DropDown.styles';
import { LanguageContext } from '../../App';

// @dryup create import logic wrapper that takes any buttons given
export function ImportButton() {
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
      <DropDown.Button
        onClick={() => {
          selectFile();
        }}
      >
        {language['importFile']}
      </DropDown.Button>
    </span>
  );
}
