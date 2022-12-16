import React from 'react';
import {
  StyledTable,
  StyledJsonFormatter,
  StyledTHead,
  StyledTBody,
} from './JsonTable.styled';
import { range } from '../utils/helperFunctions';
import { HeadingCell } from './HeadingCell';
import { DataCell } from './DataCell';
import { useState } from 'react';
import DropDownMenu from '../DropDownMenu';
import { useSelector } from 'react-redux';
import {} from '../app/slices/tableSlice';
import IndexHeading from './IndexHeading';

export function JsonTable() {
  return (
    <StyledTable tabIndex="0">
      <TableHead />
      <TableBody />
    </StyledTable>
  );
}

function TableHead() {
  const schema = useSelector((state) => state.schema);

  return (
    <StyledTHead>
      {/* For vertical rows, make tr be flex column */}
      <tr>
        <th scope="col">Index</th>
        {schema.map((property, propertyIndex) => (
          <HeadingCell
            key={`prop-${property.name}`}
            onContextMenu={(e) => {
              e.preventDefault();
              console.log('IMPLEMENT CONTEXT MENUS!');
            }}
          />
        ))}
      </tr>
    </StyledTHead>
  );
}

function TableBody() {
  const {
    headingOrder,
    rowNumber,
    dataReadFactory,
    dataUpdateFactory,
    addRow,
    swapRow,
    duplicateRow,
    cutRow,
    copyRow,
    pasteRow,
    deleteRow,
  } = useContext(AppStateContext);

  return (
    <StyledTBody>
      {range(rowNumber).map((rowIndex) => (
        // For vertical rows, make tr be flex column
        <tr key={rowIndex}>
          <IndexHeading rowIndex={rowIndex} />
          {headingOrder.map((heading, headingIndex) => {
            return (
              <DataCell
                readValue={dataReadFactory(rowIndex, heading)}
                updateValue={dataUpdateFactory(rowIndex, heading)}
                key={`${rowIndex}-${headingIndex}`}
              />
            );
          })}
        </tr>
      ))}
      <tr>
        <td>
          <button onClick={() => addRow()}>+</button>
        </td>
      </tr>
    </StyledTBody>
  );
}

function JSONPreview() {
  const { tableRows, showPreview } = useContext(AppStateContext);
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
