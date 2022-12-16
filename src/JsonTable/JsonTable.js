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
import { useContext } from 'react';
import { AppStateContext } from '../App';
import { useState } from 'react';
import DropDownMenu from '../DropDownMenu';

export function JsonTable() {
  return (
    <StyledTable tabIndex="0">
      <TableHead />
      <TableBody />
    </StyledTable>
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
    copyColumn,
    cutColumn,
    pasteColumn,
  } = useContext(AppStateContext);
  return (
    <StyledTHead>
      {/* For vertical rows, make tr be flex column */}
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
            cutColumn={() => cutColumn(headingIndex)}
            copyColumn={() => copyColumn(headingIndex)}
            pasteLeft={() => pasteColumn(headingIndex)}
            // About pasteLeft:
            // Pasting a new column on index A
            // will move the old column (currently sitting at index A)
            // to index A+1 — essetially moving the old column to the right
            pasteRight={() => pasteColumn(headingIndex + 1)}
            key={headingIndex}
            onContextMenu={(e) => {
              e.preventDefault();
              console.log('IMPLEMENT CONTEXT MENUS!');
            }}
          />
        ))}
        <td>
          <button onClick={() => addColumn()}>+</button>
        </td>
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

  function IndexHeading({ rowIndex }) {
    const [showContextMenu, setShowContextMenu] = useState(false);
    return (
      <th
        scope="row"
        onContextMenu={(e) => {
          e.preventDefault();
          setShowContextMenu([e.clientX, e.clientY]);
        }}
      >
        {rowIndex}
        {showContextMenu && (
          <IndexHeadingMenu
            xPos={showContextMenu[0]}
            yPos={showContextMenu[1]}
            rowIndex={rowIndex}
            updateShowContextMenu={() => {
              setShowContextMenu(false);
            }}
          />
        )}
      </th>
    );
  }

  const IndexHeadingMenu = ({
    rowIndex,
    updateShowContextMenu,
    xPos,
    yPos,
  }) => {
    return (
      <DropDownMenu
        {...{ xPos, yPos }}
        blurHandler={() => updateShowContextMenu()}
      >
        <p>
          <button
            onClick={() => swapRow(rowIndex, rowIndex - 1)}
            aria-label="Move row up"
          >
            Move row backward
          </button>
        </p>
        <p>
          <button
            onClick={() => swapRow(rowIndex, rowIndex * 1 + 1)}
            aria-label="Move row down"
          >
            Move row forward
          </button>
        </p>
        <p>
          <button
            onClick={() => deleteRow(rowIndex * 1)}
            aria-label="Delete row"
          >
            Delete row
          </button>
        </p>
        <p>
          <button onClick={() => cutRow(rowIndex)}>Cut row</button>
        </p>
        <p>
          <button onClick={() => copyRow(rowIndex)}>Copy row</button>
        </p>
        <p>
          <button onClick={() => duplicateRow(rowIndex)}>Duplicate row</button>
        </p>
        <p>
          <button onClick={() => pasteRow(rowIndex)}>Paste row above</button>
        </p>
        <p>
          <button onClick={() => pasteRow(rowIndex * 1 + 1)}>
            Paste row below
          </button>
        </p>
      </DropDownMenu>
    );
  };

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
