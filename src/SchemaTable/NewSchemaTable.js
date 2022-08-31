import React from 'react';
import HeadingRow from './HeadingRow';
import TableData, { AddRowButton } from './TableData';
import { StyledTable } from './SchemaTable.styled';
import { useEffect } from 'react';

export function SchemaTable({ headings, setHeadings, rows, setRows }) {
  useEffect(() => {
    if (!headings.length && rows.length === 1) {
      addColumn();
    }
  }, []);

  function updateHeading(event, index) {
    const newHeading = [...headings];
    newHeading[index] = event.target.value;
    setHeadings(newHeading);
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
