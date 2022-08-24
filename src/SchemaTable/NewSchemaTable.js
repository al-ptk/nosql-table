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

  return (
    <table>
      <tr>
        {headings.map((heading) => (
          <th>{heading}</th>
        ))}
      </tr>
      {rows.map((row) => (
        <tr>
          {row.map((cell) => (
            <td>{cell}</td>
          ))}
        </tr>
      ))}
    </table>
  );
}
