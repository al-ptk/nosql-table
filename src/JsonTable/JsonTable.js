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
      <StyledTable>
        <TableHead />
        <TableBody />
      </StyledTable>
      <JSONPreview />
    </StyledMain>
  );
}

function TableHead() {
  const { headingOrder, headingReadFactory, headingUpdateFactory, addColumn } =
    useContext(AppStateContext);
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
  } = useContext(AppStateContext);
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
