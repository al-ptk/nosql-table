import JsonTable from './JsonTable';
import { GlobalStyle } from './utils/styled-globals';
import { useState } from 'react';
import { ActionBar } from './ActionBar/ActionBar';
import { StyledFooter } from './StyledFooter';
import useTableManager from './hooks/useTableManager';
import { createContext } from 'react';
export const AppStateContext = createContext();

function App() {
  const tableManager = useTableManager();
  const [showPreview, setShowPreview] = useState(false);

  const AppState = {
    ...tableManager,
    showPreview,
    setShowPreview,
  };

  return (
    <>
      <GlobalStyle />
      <AppStateContext.Provider value={AppState}>
        <ActionBar />
        <JsonTable />
      </AppStateContext.Provider>
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
