import JsonTable from './JsonTable';
import { GlobalStyle } from './utils/styled-globals';
import { useState } from 'react';
import { ActionBar } from './ActionBar/ActionBar';
import { StyledFooter } from './StyledFooter';
import useTableManager from './hooks/useTableManager';
import { Provider as StoreProvider } from 'react-redux';
import store from './app/store';
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
      <StoreProvider store={store}>
        <ActionBar />
        <JsonTable />
      </StoreProvider>
      <StyledFooter>
        Made by{' '}
        <a href="https://github.com/al-ptk" target={'_blank'} rel="noreferrer">
          Alan Patrick
        </a>
      </StyledFooter>
    </>
  );
}

export default App;
