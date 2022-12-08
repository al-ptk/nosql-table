import React from 'react';
import { useState } from 'react';
import {
  StyledMain,
  StyledTable,
  StyledJsonFormatter,
} from './SchemaTable.styled';
import { swapPropertyName, range, objectify } from '../helperFunctions';

export function SchemaTable({
  tableData,
  setTableData,
  headingOrder,
  setHeadingOrder,
  rowNumber,
  showPreview,
}) {
  const headingUpdateFactory = (index) => {
    return (newValue) => {
      if (headingOrder[index] === newValue) return;
      const newOrder = [...headingOrder];
      newOrder[index] = newValue;
      setHeadingOrder(newOrder);
      setTableData(swapPropertyName(tableData, headingOrder[index], newValue));
    };
  };

  const headingReadFactory = (index) => {
    return () => headingOrder[index];
  };

  const dataUpdateFactory = (index, property) => {
    return (newValue) => {
      const newTable = { ...tableData };
      newTable[property][index] = newValue;
      setTableData(newTable);
    };
  };

  const dataReadFactory = (index, property) => {
    return () => tableData[property][index];
  };

  return (
    <StyledMain>
      <StyledTable>
        <thead style={{ position: 'sticky', top: 50 }}>
          <tr>
            {headingOrder.map((heading, headingIndex) => (
              <HeadingCell
                readValue={headingReadFactory(headingIndex)}
                updateValue={headingUpdateFactory(headingIndex)}
                key={headingIndex}
              />
            ))}
          </tr>
        </thead>
        <tbody>
          {range(rowNumber).map((rowIndex) => (
            <tr key={rowIndex}>
              {headingOrder.map((heading, cellIndex) => {
                return (
                  <DataCell
                    readValue={dataReadFactory(rowIndex, heading)}
                    updateValue={dataUpdateFactory(rowIndex, heading)}
                    key={cellIndex}
                  />
                );
              })}
            </tr>
          ))}
        </tbody>
      </StyledTable>
      {showPreview && (
        <p
          style={{
            backgroundColor: 'white',
            width: 400,
            margin: '0 auto',
            padding: 10,
          }}
        >
          <StyledJsonFormatter
            json={JSON.stringify(objectify(tableData, rowNumber, headingOrder))}
            tabWith={4}
          />
        </p>
      )}
    </StyledMain>
  );
}

const DataCell = ({ readValue, updateValue }) => {
  const [active, setActive] = useState(false);

  let cellValue = Array.isArray(readValue()) ? `[${readValue()}]` : readValue();

  // Add the textarea element, like below:
  //
  return (
    <td>
      <textarea
        autoFocus={true}
        value={cellValue || ''}
        onBlur={() => {
          setActive(false);
        }}
        onInput={(e) => updateValue(e.target.value)}
      >
        {readValue()}
      </textarea>
    </td>
  );
  //
  // It is much better, and does not need the flip-flop done in the old version.

  // if (active)
  //   return (
  //     <td>
  //       <input
  //         type={'text'}
  //         style={{ width: 150, height: 50 }}
  //         value={cellValue || ''}
  //         onInput={(e) => updateValue(e.target.value)}
  //         onBlur={() => {
  //           setActive(false);
  //         }}
  //         autoFocus={true}
  //       />
  //     </td>
  //   );

  // return (
  //   <td style={{ minWidth: 80, height: 18 }} onClick={() => setActive(true)}>
  //     {cellValue}
  //   </td>
  // );
};

const HeadingCell = ({ readValue, updateValue }) => {
  const [active, setActive] = useState(false);

  if (active)
    return (
      <th>
        <input
          type={'text'}
          value={readValue()}
          onInput={(e) => updateValue(e.target.value)}
          onBlur={() => {
            setActive(false);
          }}
          autoFocus={true}
        />
      </th>
    );

  return (
    <th style={{ minWidth: 80, height: 18 }} onClick={() => setActive(true)}>
      {readValue()}
    </th>
  );
};
