import SchemaTable from './SchemaTable';
import { GlobalStyle } from './styled-globals';
import { useState } from 'react';
import currentTable from './mockTable.json';

function App() {
  const [table, setTable] = useState([...currentTable]);

  return (
    <>
      <GlobalStyle />
      <SchemaTable {...{ table, setTable }} />
    </>
  );
}

export default App;
