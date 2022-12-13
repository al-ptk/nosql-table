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
  const {
    tableRows,
    headingOrder,
    rowNumber,
    showPreview,
    headingReadFactory,
    headingUpdateFactory,
    dataReadFactory,
    dataUpdateFactory,
  } = useContext(AppStateContext);

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
