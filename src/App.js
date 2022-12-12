import SchemaTable from './SchemaTable';
import { GlobalStyle } from './utils/styled-globals';
import mockTable from './mockTable.json';
import { getAllKeys, columnfy } from './utils/helperFunctions';
import { useState } from 'react';
import { ActionBar } from './ActionBar/ActionBar';
import { StyledFooter } from './StyledFooter';

/**
 * This component is meant to be a application-wide state manager.
 * It may not be the best solution, but I do not know what a better solution would be.
 * Stack overflow?
 */

// Put a ! in front of empty list for enabling mockTable.
// @todo add a better system for empty tables
const currentTable =
  ![
    { 'property 0': '', 'property 1': '' },
    { 'property 0': '', 'property 1': '' },
  ] || mockTable;

function App() {
  const [tableData, setTableData] = useState(columnfy(currentTable));
  // @todo create schema file using the heading order and heading type
  const [headingOrder, setHeadingOrder] = useState(getAllKeys(currentTable));
  const [rowNumber, setRowNumber] = useState(currentTable.length);
  const [showPreview, setShowPreview] = useState(false);
  const [title, setTitle] = useState('JSON table');

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
    setTitle,
  };

  return (
    <>
      <GlobalStyle />
      <ActionBar {...AppState} />
      <SchemaTable {...AppState} />
      <StyledFooter>
        Made by{' '}
        <a
          href="https://al-ptk.github.io/portfolio"
          target={'_blank'}
          rel="noreferrer"
        >
          Alan Patrick
        </a>
      </StyledFooter>
    </>
  );
}

export default App;
