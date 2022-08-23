import React from 'react';
import { useState } from 'react';
import { StyledTable } from './SchemaTable.styled';

export function SchemaTable(props) {
  const [headings, setHeadings] = useState(mockHeadings);
  const [rows, setRows] = useState(mockRows);

  function addHeading() {
    setHeadings(headings.concat(''));
  }

  return (
    <StyledTable>
      <tbody>
        <tr>
          {headings.map((heading) => (
            <th>
              <input value={heading} onChange={() => {}} />
            </th>
          ))}
          <button onClick={addHeading}>New Heading</button>
        </tr>
        {rows.map((row) => {
          return (
            <tr>
              {row.map((cell) => {
                return (
                  <td>
                    <input value={cell} onChange={() => {}} />
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </StyledTable>
  );
}

/**
 * Make an object where each heading is a property.
 * Ignore order for now.
 * Each heading points to a list.
 */

const mockHeadings = ['Test', 'Test2'];
const mockRows = [
  ['Ann', 23],
  ['Joe', 37],
];
