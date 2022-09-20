import SchemaTable from './SchemaTable';
import { GlobalStyle } from './styled-globals';
import mockTable from './mockTable.json';
import { getAllKeys, columnfy } from './helperFunctions';
import { useState } from 'react';

const currentTable = [{ 'property 0': 'a' }] || mockTable;

function App() {
  const [tableData, setTableData] = useState(columnfy(currentTable));
  const [headingOrder, setHeadingOrder] = useState(getAllKeys(currentTable));
  const [rowNumber, setRowNumber] = useState(currentTable.length);

  const AppState = {
    tableData,
    setTableData,
    headingOrder,
    setHeadingOrder,
    rowNumber,
    setRowNumber,
  };

  return (
    <>
      <GlobalStyle />
      <SchemaTable {...AppState} />
    </>
  );
}

export default App;
