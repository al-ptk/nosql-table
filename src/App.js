import SchemaTable from './SchemaTable';
import { GlobalStyle } from './styled-globals';
import { getAllKeys } from './helperFunctions';
import { useState } from 'react';
// import { getMockTable } from './mockTable';

// const currentTable = getMockTable();
const currentTable = [{ 'property 0': '' }];

function App() {
  const [headings, setHeadings] = useState(getAllKeys(currentTable));
  const [rows, setRows] = useState(currentTable);
  const [showResult, setShowResult] = useState(false);

  return (
    <>
      <GlobalStyle />
      <SchemaTable {...{ headings, setHeadings, rows, setRows }} />
      <button onClick={() => setShowResult((yes) => !yes)}>Show Result</button>
      {showResult && (
        <code>
          <pre>{JSON.stringify(rows)}</pre>
        </code>
      )}
    </>
  );
}

export default App;
