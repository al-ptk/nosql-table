import React from 'react';
import { useState, useEffect } from 'react';
import { getMockTable } from '../mockTable';
import { getAllKeys, vectorizeInOrder } from '../helperFunctions';

export function SchemaTable(props) {
  const [headings, setHeadings] = useState([]);
  const [rows, setRows] = useState([]);

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
        </tr>
        {rows.map((row, rowIndex) => (
          <TableRow
            key={rowIndex}
            rowIndex={rowIndex}
            rowData={row}
            updateCell={updateCell}
          />
        ))}
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
      <input type={'text'} value={text} onInput={updateCell} />
    </td>
  );
};

const TableRow = ({ rowIndex, rowData, updateCell }) => {
  return (
    <tr key={rowIndex}>
      {rowData.map((cell, cellIndex) => (
        <TableCell
          key={cellIndex}
          text={cell}
          updateCell={(event) => updateCell(event, cellIndex, rowIndex)}
        />
      ))}
    </tr>
  );
};
