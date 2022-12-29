import React from 'react';
import { useDispatch } from 'react-redux';
import { newTable } from '../../redux/slices/tableSlice';
import { CustomImportButton } from './CustomImportButton';
import { StyledTP } from './TablePlaceholder.styles';

export function TablePlaceholder() {
  const dispatch = useDispatch();
  return (
    <StyledTP.Container>
      <StyledTP.Button
        onClick={() => {
          dispatch(newTable());
        }}
      >
        New Table
      </StyledTP.Button>
      <StyledTP.Ruler />
      <CustomImportButton />
    </StyledTP.Container>
  );
}
