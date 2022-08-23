import React from 'react';
import { useState } from 'react';
import { StyledTable } from './SchemaTable.styled';

export function SchemaTable(props) {
  const [headings, setHeadings] = useState(mockHeadings);
  const [rows, setRows] = useState(mockRows);

  return (
    <StyledTable>
      <tbody>
        <tr>
          {headings.map((heading) => (
            <th>{heading}</th>
          ))}
          <button>+</button>
        </tr>
        {rows.map((row) => {
          return (
            <tr>
              {row.map((cell) => {
                return <td>{cell}</td>;
              })}
            </tr>
          );
        })}
        <button>+</button>
      </tbody>
    </StyledTable>
  );
}

/**
 * Make an object where each heading is a property.
 * Ignore order for now.
 * Each heading points to a list.
 */

const mockHeadings = ['Test'];
const mockRows = [
  ['Ann', 23],
  ['Joe', 37],
];
