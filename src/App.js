import SchemaTable from './SchemaTable';
import { GlobalStyle } from './styled-globals';
import { getMockTable } from './mockTable';
import { getAllKeys } from './helperFunctions';

// const currentTable = getMockTable();
const currentTable = [{ 'property 0': '' }];

function App() {
  return (
    <>
      <GlobalStyle />
      <SchemaTable
        headingsList={getAllKeys(currentTable)}
        rowsList={currentTable}
      />
    </>
  );
}

export default App;
