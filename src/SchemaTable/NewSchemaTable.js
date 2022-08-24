import React from 'react';
import { useState, useEffect } from 'react';
import HeadingRow from './HeadingRow';
import TableData, { AddRowButton } from './TableData';

export function SchemaTable({ headingsList, rowsList }) {
  const [headings, setHeadings] = useState([]);
  const [rows, setRows] = useState([]);

  // Component Did Mount
  useEffect(() => {
    setHeadings(headingsList);
    setRows(rowsList);
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
    <table>
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
    </table>
  );
}
