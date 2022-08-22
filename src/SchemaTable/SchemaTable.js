import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import TableHeadings from './TableHeadings';
import TableBody from './TableBody';

export function SchemaTable({ data, headings }) {
  const [tableData, setTableData] = useState(data);
  const [headingList, setHeadingList] = useState(headings);

  function updateTableData(event, heading, rowID) {
    const newtableData = [...tableData];
    newtableData[rowID][heading] = event.target.value;
    setTableData(newtableData);
  }

  return (
    <StyledTable>
      <TableHeadings
        headingList={headingList}
        setHeadingList={setHeadingList}
      />
      <TableBody
        tableData={tableData}
        updateTableData={updateTableData}
        headingList={headingList}
      />
    </StyledTable>
  );
}

const StyledTable = styled.table`
  margin: 10vh auto;
`;
