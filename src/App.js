import SchemaTable from './SchemaTable';
import { GlobalStyle } from './styled-globals';
import mockTable from './mockTable.json';
import { getAllKeys, columnfy } from './helperFunctions';
import { useState } from 'react';
import { ActionBar } from './ActionBar/ActionBar';

const currentTable =
  [
    { 'property 0': 'a', 'property 1': 'b' },
    { 'property 0': 'c', 'property 1': 'd' },
  ] || mockTable;

function App() {
  const [tableData, setTableData] = useState(columnfy(currentTable));
  const [headingOrder, setHeadingOrder] = useState(getAllKeys(currentTable));
  const [rowNumber, setRowNumber] = useState(currentTable.length);
  const [showPreview, setShowPreview] = useState(false);
  const [title, setTitle] = useState('JSON table')

  const AppState = {
    tableData,
    setTableData,
    headingOrder,
    setHeadingOrder,
    rowNumber,
    setRowNumber,
    showPreview,
    setShowPreview,
    title,
    setTitle
  };

  return (
    <>
      <GlobalStyle />
      <ActionBar {...AppState} />
      <SchemaTable {...AppState} />
    </>
  );
}

export default App;
