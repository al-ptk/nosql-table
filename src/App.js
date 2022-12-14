import JsonTable from './JsonTable';
import { GlobalStyle } from './utils/styled-globals';
import { useState } from 'react';
import { ActionBar } from './ActionBar/ActionBar';
import { StyledFooter } from './StyledFooter';
import useTableManager from './hooks/useTableManager';
import useCursor from './hooks/useCursor';
import { createContext } from 'react';
export const AppStateContext = createContext();

function App() {
  const tableManager = useTableManager();
  const tableCursor = useCursor();
  const [showPreview, setShowPreview] = useState(false);

  const AppState = {
    ...tableManager,
    ...tableCursor,
    showPreview,
    setShowPreview,
  };

  return (
    <>
      <AppStateContext.Provider value={AppState}>
        <GlobalStyle />
        <ActionBar />
        <JsonTable />
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
