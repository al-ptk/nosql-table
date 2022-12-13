import React from 'react';
import {
  StyledMain,
  StyledTable,
  StyledJsonFormatter,
} from './SchemaTable.styled';
import { range } from '../utils/helperFunctions';
import { HeadingCell } from './HeadingCell';
import { DataCell } from './DataCell';

export function SchemaTable({
  tableRows,
  setTableRows,
  headingOrder,
  setHeadingOrder,
  rowNumber,
  showPreview,
}) {
  /*
    The factories for headings and data cells 
   */

  const headingUpdateFactory = (index) => {
    return (newHeading) => {
      let oldHeading = headingOrder[index];
      if (oldHeading === newHeading) return;

      // updates the headingOrder
      const newOrder = headingOrder.slice(); // creates shallow copy
      newOrder[index] = newHeading;
      setHeadingOrder(newOrder);

      // updates ALL tableRows entries
      const newtableRows = tableRows.map((object) => {
        object[newHeading] = object[oldHeading];
        delete object[oldHeading];
        return object;
      });
      setTableRows(newtableRows);
    };
  };

  const headingReadFactory = (index) => {
    return () => headingOrder[index];
  };

  const dataUpdateFactory = (index, property) => {
    return (newValue) => {
      const newTable = tableRows.slice(); // creates shallow copy
      newTable[index][property] = newValue;
      setTableRows(newTable);
    };
  };

  const dataReadFactory = (index, property) => {
    return () => tableRows[index][property];
  };

  return (
    <StyledMain>
      <StyledTable>
        <TableHead
          {...{ headingOrder, headingReadFactory, headingUpdateFactory }}
        />
        <TableBody
          {...{ rowNumber, headingOrder, dataReadFactory, dataUpdateFactory }}
        />
      </StyledTable>
      <JSONPreview {...{ showPreview, tableRows, rowNumber, headingOrder }} />
    </StyledMain>
  );
}

function TableHead({ headingOrder, headingReadFactory, headingUpdateFactory }) {
  return (
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
  );
}

function TableBody({
  rowNumber,
  headingOrder,
  dataReadFactory,
  dataUpdateFactory,
}) {
  return (
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
  );
}

function JSONPreview({ showPreview, tableRows }) {
  return showPreview ? (
    <p
      style={{
        backgroundColor: 'white',
        width: 400,
        margin: '0 auto',
        padding: 10,
      }}
    >
      <StyledJsonFormatter json={JSON.stringify(tableRows)} tabWith={4} />
    </p>
  ) : null;
}
