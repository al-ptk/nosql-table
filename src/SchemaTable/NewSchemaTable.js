import React from 'react';
import { StyledTable } from './SchemaTable.styled';

export function SchemaTable({ table, setTable }) {
  console.log(table)
  return (
    <StyledTable>
      <tbody>
        <tr>
          <td>Hey</td>
        </tr>
      </tbody>
    </StyledTable>
  );
}
