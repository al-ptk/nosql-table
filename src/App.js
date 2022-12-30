import JsonTable from './JsonTable';
import { GlobalStyle } from './utils/styled-globals';
import { Provider as StoreProvider, useSelector } from 'react-redux';
import store from './redux/store';
import MenuBar from './MenuBar/MenuBar';
import { createContext } from 'react';
import { Footer } from './Footer';
import { language } from './locales/language';
// @dryup Move language stuff to redux store instead?
export const LanguageContext = createContext();

function App() {
  return (
    <LanguageContext.Provider value={language}>
      <StoreProvider store={store}>
        <GlobalStyle />
        <MenuBar />
        <JsonTable />
        <RenderModal />
        <Footer />
      </StoreProvider>
    </LanguageContext.Provider>
  );
}

const RenderModal = () => {
  const modal = useSelector((state) => state.uiKnobs.modal);
  return <>{modal}</>;
};

export default App;
