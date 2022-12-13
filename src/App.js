import JsonTable from './JsonTable';
import { GlobalStyle } from './utils/styled-globals';
import mockTable from './mockTable.json';
import { getAllKeys } from './utils/helperFunctions';
import { useState } from 'react';
import { ActionBar } from './ActionBar/ActionBar';
import { StyledFooter } from './StyledFooter';
import { createContext } from 'react';

export const AppStateContext = createContext();
/**
 * This component is meant to be a application-wide state manager.
 */

// Put a ! in front of empty list for enabling mockTable.
// @todo add a better system for empty tables
const currentTable =
  ![
    { 'property 0': '', 'property 1': '' },
    { 'property 0': '', 'property 1': '' },
  ] || mockTable;

function App() {
  const [tableRows, setTableRows] = useState(currentTable);
  // @todo create schema file using the heading order and heading type
  const [headingOrder, setHeadingOrder] = useState(getAllKeys(currentTable));
  const [rowNumber, setRowNumber] = useState(currentTable.length);
  const [showPreview, setShowPreview] = useState(true);
  const [title, setTitle] = useState('JSON table');

  const AppState = {
    tableRows,
    setTableRows,
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
      <JsonTable {...AppState} />
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
