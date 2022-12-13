import JsonTable from './JsonTable';
import { GlobalStyle } from './utils/styled-globals';
import mockTable from './mockTable.json';
import { useState } from 'react';
import { ActionBar } from './ActionBar/ActionBar';
import { StyledFooter } from './StyledFooter';
import useTableManager from './hooks/useTableManager';

import { createContext } from 'react';
export const AppStateContext = createContext();

const currentTable =
  ![
    { 'property 0': '', 'property 1': '' },
    { 'property 0': '', 'property 1': '' },
  ] || mockTable;

function App() {
  const tableManager = useTableManager(currentTable);
  const [showPreview, setShowPreview] = useState(false);

  const AppState = {
    ...tableManager,
    showPreview,
    setShowPreview,
  };

  return (
    <>
      <AppStateContext.Provider value={AppState}>
        <GlobalStyle />
        <ActionBar  />
        <JsonTable  />
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
      </AppStateContext.Provider>
    </>
  );
}

export default App;
