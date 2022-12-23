import React from 'react';
import { StyledTable } from './JsonTable.styled';
import { TableBody } from './TableBody/TableBody';
import { TableHead } from './TableHead/TableHead';

export function JsonTable({ isVertical, setIsVertical }) {
  return (
    <StyledTable tabIndex="0" isVertical={isVertical}>
      <TableHead setIsVertical={setIsVertical} />
      <TableBody />
    </StyledTable>
  );
}
