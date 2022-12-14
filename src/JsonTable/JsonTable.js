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
  const { resetCursorPosition } = useContext(AppStateContext);
  return (
    <StyledMain>
      <StyledTable
        tabIndex="0"
        onBlur={() => {
          resetCursorPosition();
        }}
      >
        <TableHead />
        <TableBody />
      </StyledTable>
      <JSONPreview />
    </StyledMain>
  );
}

const elictPickedColumn = (headingIndex) => {
  const columnGroup = document.querySelectorAll(`[data-col="${headingIndex}"]`);
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
    setCursorPosition,
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
            onClick={() => {
              setCursorPosition(['-1', headingIndex]);
              elictPickedColumn(headingIndex);
            }}
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

const elictPickedRow = (e) => {
  // Stopping bubble up
  e.stopPropagation();
  // Capturing the "lowest" element that register the even
  const chosenRow = e.currentTarget.parentElement;
  chosenRow.style.backgroundColor = 'rgba(255,0,0,.3)';
  const setBorderBack = () => {
    chosenRow.style.backgroundColor = 'transparent';
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
    setCursorPosition,
    swapRow,
  } = useContext(AppStateContext);
  return (
    <tbody style={{ position: 'relative' }}>
      {range(rowNumber).map((rowIndex) => (
        <tr key={rowIndex}>
          <th
            scope="row"
            onClick={(e) => {
              setCursorPosition([rowIndex, '-1']);
              elictPickedRow(e);
            }}
          >
            <button
              onClick={() => swapRow(rowIndex, rowIndex - 1)}
              aria-label="Move row up"
            >
              ^
            </button>
            {rowIndex}
            <button
              onClick={() => swapRow(rowIndex, parseInt(rowIndex) + 1)}              aria-label="Move row dow"
            >
              v
            </button>
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
                onFocus={() => setCursorPosition([rowIndex, headingIndex])}
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
