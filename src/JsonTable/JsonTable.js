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

const elictPickedColumn = (headingIndex) => {
  const columnGroup = document.querySelectorAll(
    `[data-col="${headingIndex}"]`
  );
  columnGroup.forEach(
    (elem) => (elem.style.backgroundColor = 'rgba(255,0,0,.3)')
  );
  setTimeout(() => {
    columnGroup.forEach((elem) => (elem.style.backgroundColor = 'transparent'));
  }, 1000);
};

function TableHead() {
  const {
    headingOrder,
    headingReadFactory,
    headingUpdateFactory,
    addColumn,
    deleteColumn,
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
            onClick={() => elictPickedColumn(headingIndex)}
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

const elictPickedRow = (e) => {
  // Stopping bubble up
  e.stopPropagation();
  // Capturing the "lowest" element that register the even
  const chosenRow = e.currentTarget.parentElement;
  chosenRow.style.backgroundColor = 'rgba(255,0,0,.3)';
  const setBorderBack = () => {
    chosenRow.style.backgroundColor = 'white';
  };
  setTimeout(setBorderBack, 1000);
};

function TableBody() {
  const {
    headingOrder,
    rowNumber,
    dataReadFactory,
    dataUpdateFactory,
    addRow,
    deleteRow,
  } = useContext(AppStateContext);
  return (
    <tbody style={{ position: 'relative' }}>
      {range(rowNumber).map((rowIndex) => (
        <tr key={rowIndex}>
          <th scope="row" onClick={elictPickedRow}>
            {rowIndex}
            <button onClick={() => deleteRow(rowIndex)}>X</button>
          </th>
          {headingOrder.map((heading, headingIndex) => {
            return (
              <DataCell
                readValue={dataReadFactory(rowIndex, heading)}
                updateValue={dataUpdateFactory(rowIndex, heading)}
                key={headingIndex}
                data-row={rowIndex}
                data-col={headingIndex}
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
