import SchemaTable from './SchemaTable';
import { GlobalStyle } from './styled-globals';
import { getHolidayTable } from './mockTable';

function App() {
  return (
    <>
      <GlobalStyle />
      <SchemaTable
        data={getHolidayTable().data}
        headingList={getHolidayTable().headings}
      />
    </>
  );
}

export default App;
