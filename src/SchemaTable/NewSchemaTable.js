import React from 'react';
import { useState } from 'react';
import { StyledTable } from './SchemaTable.styled';
import { swapPropertyName, range, objectify } from '../helperFunctions';
import JsonFormatter from 'react-json-formatter';

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
    <div>
      <StyledTable>
        <thead>
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
          <JsonFormatter
            json={JSON.stringify(objectify(tableData, rowNumber, headingOrder))}
            tabWith={4}
          />
        </p>
      )}
    </div>
  );
}

const DataCell = ({ readValue, updateValue }) => {
  const [active, setActive] = useState(false);

  if (active)
    return (
      <td>
        <input
          type={'text'}
          value={readValue() || ''}
          onInput={(e) => updateValue(e.target.value)}
          onBlur={() => {
            setActive(false);
          }}
          autoFocus={true}
        />
      </td>
    );

  return (
    <td style={{ minWidth: 80, height: 18 }} onClick={() => setActive(true)}>
      {readValue()}
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
