import React from 'react';
import HeadingRow from './HeadingRow';
import TableData, { AddRowButton } from './TableData';
import { StyledTable } from './SchemaTable.styled';

export function SchemaTable({ headings, setHeadings, rows, setRows }) {
  function updateHeading(event, index) {
    // Update headings list
    const newHeadings = [...headings];
    newHeadings[index] = event.target.value;
    setHeadings(newHeadings);
  }

  function updateCell(event, cellIndex, rowIndex) {
    const newRows = [...rows];
    newRows[rowIndex][cellIndex] = event.target.value;
    setRows(newRows);
  }

  function addColumn() {
    setHeadings(headings.concat(`property ${headings.length}`));
  }

  function addRow() {
    const newRows = [...rows];
    newRows.push({});
    setRows(newRows);
  }

  return (
    <StyledTable>
      <tbody>
        <HeadingRow
          headings={headings}
          updateHeading={updateHeading}
          addColumn={addColumn}
        />

        <TableData
          rows={rows}
          headings={headings}
          updateCell={updateCell}
          addRow={addRow}
        />

        <AddRowButton addRow={addRow} />
      </tbody>
    </StyledTable>
  );
}
