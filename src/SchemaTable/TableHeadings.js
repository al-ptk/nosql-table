import React from 'react';

export default function TableHeadings({ headingList, setHeadingList }) {
  console.log(headingList);
  return (
    <tr>
      {headingList.map((heading, index) => (
        <th key={index}>
          <input type="text" value={heading} />
        </th>
      ))}
    </tr>
  );
}
