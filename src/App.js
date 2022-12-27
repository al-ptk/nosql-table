import JsonTable from './JsonTable';
import { GlobalStyle } from './utils/styled-globals';
import { StyledFooter } from './components/StyledFooter';
import { Provider as StoreProvider } from 'react-redux';
import store from './redux/store';
import MenuBar from './MenuBar/MenuBar';
import { useState } from 'react';
import { JSONPreview } from './components/JSONPreview/JSONPreview';

function App() {
  const [isVertical, setIsVertical] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [modal, setModal] = useState(false);

  return (
    <>
      <GlobalStyle />
      <StoreProvider store={store}>
        <MenuBar {...{ setIsVertical, setShowPreview, setModal }} />
        <JsonTable {...{ isVertical, setIsVertical, setModal }} />
        <JSONPreview {...{ showPreview, setShowPreview }} />
        {modal}
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
