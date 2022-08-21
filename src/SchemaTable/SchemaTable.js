import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

/**
 * ToDo:
 *
 *  Add a subcomponent just for headings
 *  Add a subcomponent template for rows
 *
 */

export function SchemaTable({ data, headingList }) {
  const [tableData, setTableData] = useState(data);
  const [headings, setHeadings] = useState(headingList);

  function updateTableData(event, heading, rowID) {
    const newtableData = [...tableData];
    newtableData[rowID][heading] = event.target.value;
    setTableData(newtableData);
  }

  return (
    <StyledTable>
      {/* Add a Headings component */}
      <tr>
        {headings.map((heading, index) => (
          <th key={index}>
            <input type="text" value={heading} />
          </th>
        ))}
      </tr>

      {/* Add a Row component */}
      {tableData.map((instance, index) => (
        <tr key={index}>
          {headings.map((heading, subIndex) => (
            <td key={subIndex}>
              <input
                type="text"
                value={instance[heading]}
                onInput={(event) => updateTableData(event, heading, index)}
              />
            </td>
          ))}
        </tr>
      ))}
    </StyledTable>
  );
}

const StyledTable = styled.table`
  margin: 10vh auto;
  width: 600px;
  height: 400px;
`;
