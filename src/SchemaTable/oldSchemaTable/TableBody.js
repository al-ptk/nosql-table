import React from 'react';

export default function TableBody({headingList, tableData, updateTableData}) {
  return (
    <tbody>
      {tableData.map((instance, index) => (
        <tr key={index}>
          {headingList.map((heading, subIndex) => (
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
    </tbody>
  );
}
