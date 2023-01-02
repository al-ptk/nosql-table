import React from 'react';
import { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { LanguageContext } from '../../App';
import { newTable } from '../../redux/slices/tableSlice';
import { StyledTP } from './TablePlaceholder.styles';

export function TablePlaceholder() {
  const dispatch = useDispatch();
  const language = useContext(LanguageContext);
  const selectFile = () => {
    document.getElementById('hidden-file-importer').click();
  };

  return (
    <StyledTP.Container>
      <StyledTP.Button
        onClick={() => {
          dispatch(newTable());
        }}
      >
        {language['newTable']}
      </StyledTP.Button>
      <StyledTP.Ruler />
      <StyledTP.Button onClick={selectFile}>
        {language['importFile']}
      </StyledTP.Button>
    </StyledTP.Container>
  );
}
