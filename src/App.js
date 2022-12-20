import JsonTable from './JsonTable';
import { GlobalStyle } from './utils/styled-globals';
import { StyledFooter } from './components/StyledFooter';
import { Provider as StoreProvider } from 'react-redux';
import store from './app/store';
import MenuBar from './MenuBar/MenuBar';
import { useState } from 'react';

function App() {
  const [isVertical, setIsVertical] = useState(false);
  return (
    <>
      <GlobalStyle />
      <StoreProvider store={store}>
        <MenuBar {...{ setIsVertical }} />
        <JsonTable {...{ isVertical }} />
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
