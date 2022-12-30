import React from 'react';
import { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { LanguageContext } from '../../App';
import { newTable } from '../../redux/slices/tableSlice';
import { CustomImportButton } from './CustomImportButton';
import { StyledTP } from './TablePlaceholder.styles';

export function TablePlaceholder() {
  const dispatch = useDispatch();
  const language = useContext(LanguageContext);

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
      <CustomImportButton />
    </StyledTP.Container>
  );
} 
