import JsonTable from './JsonTable';
import { GlobalStyle } from './utils/styled-globals';
import { StyledFooter } from './components/StyledFooter';
import { Provider as StoreProvider, useSelector } from 'react-redux';
import store from './redux/store';
import MenuBar from './MenuBar/MenuBar';
import { createContext } from 'react';
import languages from './languages.json';
export const LanguageContext = createContext();

function App() {
  return (
    <LanguageContext.Provider value={languages[navigator.language]}>
      <StoreProvider store={store}>
        <GlobalStyle />
        <MenuBar />
        <JsonTable />
        <RenderModal />
        <StyledFooter>
          Made by{' '}
          <a
            href="https://github.com/al-ptk"
            target={'_blank'}
            rel="noreferrer"
          >
            Alan Patrick

          </a>
        </StyledFooter>
      </StoreProvider>
    </LanguageContext.Provider>
  );
}

const RenderModal = () => {
  const modal = useSelector((state) => state.uiKnobs.modal);
  return <>{modal}</>;
};

export default App;
