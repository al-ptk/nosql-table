import SchemaTable from './SchemaTable';
import { GlobalStyle } from './styled-globals';
import { getMockTable } from './mockTable';
import { getAllKeys } from './helperFunctions';

function App() {
  return (
    <>
      <GlobalStyle />
      <SchemaTable
        headingsList={getAllKeys(getMockTable())}
        rowsList={getMockTable()}
      />
    </>
  );
}

export default App;
