import JsonTable from './JsonTable';
import { GlobalStyle } from './utils/styled-globals';
import { ActionBar } from './ActionBar/ActionBar';
import { StyledFooter } from './StyledFooter';
import { Provider as StoreProvider } from 'react-redux';
import store from './app/store';

function App() {
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
