import React from 'react';
import {
  StyledMain,
  StyledTable,
  StyledJsonFormatter,
} from './JsonTable.styled';
import { range } from '../utils/helperFunctions';
import { HeadingCell } from './HeadingCell';
import { DataCell } from './DataCell';
import { useContext } from 'react';
import { AppStateContext } from '../App';

export function JsonTable() {
  return (
    <StyledMain>
      <StyledTable tabIndex="0">
        <TableHead />
        <TableBody />
      </StyledTable>
      <JSONPreview />
    </StyledMain>
  );
}

function TableHead() {
  const {
    headingOrder,
    headingReadFactory,
    headingUpdateFactory,
    addColumn,
    deleteColumn,
    swapColumn,
  } = useContext(AppStateContext);
  return (
    <thead style={{ position: 'sticky', top: 50 }}>
      <tr>
        <th scope="col">Index</th>
        {headingOrder.map((heading, headingIndex) => (
          <HeadingCell
            readValue={headingReadFactory(headingIndex)}
            updateValue={headingUpdateFactory(headingIndex)}
            deleteSelf={() => deleteColumn(headingIndex)}
            moveLeft={() => {
              swapColumn(headingIndex, headingIndex - 1);
            }}
            moveRight={() => {
              swapColumn(headingIndex, headingIndex + 1);
            }}
            key={headingIndex}
          />
        ))}
        <td>
          <button onClick={() => addColumn()}>+</button>
        </td>
      </tr>
    </thead>
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
  } = useContext(AppStateContext);
  return (
    <tbody style={{ position: 'relative' }}>
      {range(rowNumber).map((rowIndex) => (
        <tr key={rowIndex}>
          <th scope="row">
            <button
              onClick={() => swapRow(rowIndex, rowIndex - 1)}
              aria-label="Move row up"
            >
              ^
            </button>
            {rowIndex}
            <button
              onClick={() => swapRow(rowIndex, parseInt(rowIndex) + 1)}
              aria-label="Move row dow"
            >
              v
            </button>
            <button onClick={() => rowIndex}>X</button>
          </th>
          {headingOrder.map((heading, headingIndex) => {
            return (
              <DataCell
                readValue={dataReadFactory(rowIndex, heading)}
                updateValue={dataUpdateFactory(rowIndex, heading)}
                key={headingIndex}
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
    </tbody>
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
