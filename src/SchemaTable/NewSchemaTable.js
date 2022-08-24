import React from 'react';
import { useState, useEffect } from 'react';
import { getMockTable } from '../mockTable';
import { getAllKeys, vectorizeInOrder } from '../helperFunctions';

export function SchemaTable(props) {
  const [headings, setHeadings] = useState([]);
  const [rows, setRows] = useState([]);

  // Component Did Mount
  useEffect(() => {
    const mockTable = getMockTable();
    const headingsList = getAllKeys(mockTable);
    const rowsList = vectorizeInOrder(mockTable, headingsList);
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

  function addHeading(event) {
    setHeadings(headings.concat(''));
    /**
     * The code below shouldn't work.
     * It does work, but it shouldn't.
     * I do not know why it works. O.o
     */
    const newRows = [...rows];
    newRows.forEach((row) => row.push(''));
  }

  function addRow(event) {
    const newRows = [...rows];
    newRows.push(Array(headings.length).fill(''));
    setRows(newRows);
  }

  return (
    <table>
      <tbody>
        <tr>
          {headings.map((heading, index) => (
            <ColumnHeading
              key={index}
              text={heading}
              updateHeading={(event) => updateHeading(event, index)}
            />
          ))}
          <th>
            <button onClick={addHeading}>Add Heading</button>
          </th>
        </tr>
        {rows.map((row, rowIndex) => (
          <TableRow
            key={rowIndex}
            rowIndex={rowIndex}
            rowData={row}
            updateCell={updateCell}
          />
        ))}
        <tr>
          <td>
            <button onClick={addRow}>Add Row</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

const ColumnHeading = ({ text, updateHeading }) => {
  return (
    <th>
      <input type={'text'} value={text} onInput={updateHeading} />
    </th>
  );
};

const TableCell = ({ text, updateCell }) => {
  return (
    <td>
      <input type={'text'} value={text || ''} onInput={updateCell} />
    </td>
  );
};

const TableRow = ({ rowIndex, rowData, updateCell }) => {
  return (
    <tr key={rowIndex}>
      {rowData.map((cell, cellIndex) => (
        <TableCell
          key={cellIndex}
          text={cell || ''}
          updateCell={(event) => updateCell(event, cellIndex, rowIndex)}
        />
      ))}
    </tr>
  );
};
