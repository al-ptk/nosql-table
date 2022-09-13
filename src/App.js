import SchemaTable from './SchemaTable';
import { GlobalStyle } from './styled-globals';
// import { useState } from 'react';
// import currentTable from './mockTable.json';

const properties = ['Prop 1', 'Prop 2'];
const dataset = [
  ['Value 1', 'Value 2'],
  ['Value 3', 'Value 4'],
];

function App() {
  // const [table, setTable] = useState([...currentTable]);

  return (
    <>
      <GlobalStyle />
      <SchemaTable dataset={dataset} properties={properties}/>
    </>
  );
}

export default App;
