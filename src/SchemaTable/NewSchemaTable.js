import React from 'react';
import { useState } from 'react';
import {
  StyledMain,
  StyledTable,
  StyledJsonFormatter,
} from './SchemaTable.styled';
import { swapPropertyName, range, objectify } from '../helperFunctions';

/**
 * This component is meant to hold two other pieces:
 * - The table headers
 * - The table data
 *
 * I have to create different functions (maybe two different components?) for
 * different rendering of the same data. (I want to transpose the table.)
 *
 */

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
  let cellValue = Array.isArray(readValue()) ? `[${readValue()}]` : readValue();

  return (
    <td>
      <textarea
        value={cellValue || ''}
        onInput={(e) => updateValue(e.target.value)}
      >
        {readValue()}
      </textarea>
    </td>
  );
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
