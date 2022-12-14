import { useState } from 'react';
import { getAllKeys } from '../utils/helperFunctions';
import mockTable from '../mockTable.json';
import { useEffect } from 'react';

const emptyTable =
  ![
    { 'property 0': '', 'property 1': '' },
    { 'property 0': '', 'property 1': '' },
  ] || mockTable;

function* propNumberGenerator(start = 0) {
  while (true) {
    yield start;
    start++;
  }
}

/*
  For all states of one project. 
  Each project has an unique table, with its own title and schema.
*/
export default function useTableManager(tableStream = emptyTable.slice()) {
  const [tableRows, setTableRows] = useState(tableStream);
  const [headingOrder, setHeadingOrder] = useState(getAllKeys(tableStream));
  const [rowNumber, setRowNumber] = useState(tableStream.length);
  const [title, setTitle] = useState('JSON table');
  const [clipboard, setClipboard] = useState(null);
  const [propNumber, setNumGenerator] = useState(
    propNumberGenerator(tableStream.length)
  );

  useEffect(() => {
    setRowNumber(tableRows.length - 1); // w/0 the -1, indexes goes out of bounds
  }, [tableRows]);

  //  ---------------------------- Cell Manipulation ---------------------------
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

  //  ---------------------------- Table Manipulation --------------------------
  const newTable = () => {
    setTableRows(emptyTable.slice()); // create shallow copy
    setHeadingOrder(getAllKeys(emptyTable));
    setTitle('New Table');
  };

  // --- Columns ----

  const addColumn = (heading, valuesArray, headingIndex) => {
    heading = heading || `property ${propNumber.next().value}`;
    valuesArray = valuesArray || new Array(tableRows.length).fill('');
    headingIndex = headingIndex ?? headingOrder.length;

    // Update Headings
    const shallowOrder = headingOrder.slice();
    shallowOrder.splice(headingIndex, 0, heading); // Adds heading to array
    setHeadingOrder(shallowOrder);

    // Update Rows
    setTableRows(
      tableRows.map((row, rowIndex) => {
        // since valuesArray will have the same length and order
        // as the tableRows, I can use the row's index to access
        // its respective value in the value array.
        row[heading] = valuesArray[rowIndex];
        return row;
      })
    );
  };

  const deleteColumn = (index) => {
    // ORDER MATTERS! Update the rows BEFORE updating the headings
    setTableRows(
      tableRows.map((row) => {
        delete row[headingOrder[index]];
        return row;
      })
    );
    setHeadingOrder(
      headingOrder.filter((heading, headingIndex) => headingIndex !== index)
    );
  };

  const swapColumn = (oldIndex, newIndex) => {
    oldIndex = parseInt(oldIndex);
    newIndex = parseInt(newIndex);

    if (newIndex < 0 || newIndex >= headingOrder.length) return;

    const shallowOrder = headingOrder.slice();
    [shallowOrder[oldIndex], shallowOrder[newIndex]] = [
      shallowOrder[newIndex],
      shallowOrder[oldIndex],
    ];
    setHeadingOrder(shallowOrder);
  };

  const copyColumn = (headingIndex) => {
    const colHeading = headingOrder[headingIndex];
    const heading = headingOrder[headingIndex];
    const colRows = tableRows.map((row) => row[heading]);
    setClipboard({ type: 'col', data: { colHeading, colRows } });
  };

  const cutColumn = (headingIndex) => {
    copyColumn(headingIndex);
    deleteColumn(headingIndex);
  };

  const pasteColumn = (headingIndex) => {
    if (clipboard?.type !== 'col') return;
    const { colHeading, colRows } = clipboard.data;
    addColumn(colHeading, colRows, headingIndex);
  };

  // --- Rows ----

  const addRow = () => {
    const newRow = Object.fromEntries(
      headingOrder.map((heading) => [heading, ''])
    );
    setTableRows(tableRows.concat(newRow));
  };

  const deleteRow = (rowIndex) => {
    let shallowRows = tableRows.slice();
    shallowRows.splice(rowIndex, 1);
    setTableRows(shallowRows);
  };

  const swapRow = (oldIndex, newIndex) => {
    oldIndex = parseInt(oldIndex);
    newIndex = parseInt(newIndex);

    if (newIndex < 0 || newIndex >= tableRows.length) {
      console.log(`Invalid newIndex ${newIndex}`);
      return;
    }

    const shallowRows = tableRows.slice();
    [shallowRows[oldIndex], shallowRows[newIndex]] = [
      shallowRows[newIndex],
      shallowRows[oldIndex],
    ];
    setTableRows(shallowRows);
  };

  const duplicateRow = (rowIndex) => {
    const shallowRows = tableRows.slice();
    shallowRows.splice(rowIndex, 0, tableRows[rowIndex]);
    setTableRows(shallowRows);
  };

  const copyRow = (rowIndex) => {
    let rowData = tableRows[rowIndex];
    setClipboard({ type: 'row', data: rowData });
  };

  const cutRow = (rowIndex) => {
    copyRow(rowIndex);
    deleteRow(rowIndex);
  };

  const pasteRow = (rowIndex) => {
    if (clipboard?.type !== 'row') return;
    const shallowRows = tableRows.slice();
    shallowRows.splice(rowIndex, 0, clipboard.data);
    setTableRows(shallowRows);
  };

  //  ---------------------------- File Manipulation ---------------------------
  const importTable = (fileInput) => {
    const reader = new FileReader();
    reader.readAsText(fileInput.current.files[0]);
    reader.onload = function () {
      const newTable = JSON.parse(reader.result);
      setHeadingOrder(getAllKeys(newTable));
      setTableRows(newTable);
      setTitle(fileInput.current.files[0].name.slice(0, -'.json'.length));
      setNumGenerator(propNumberGenerator(newTable.length));
    };
  };

  const exportTable = () => {
    const json = JSON.stringify(tableRows);
    const file = new File([json], `${title}.json`, {
      type: 'application/json',
    });
    return file;
  };

  //  --------------------------------------------------------------------------
  return {
    tableRows,
    setTableRows,
    headingOrder,
    setHeadingOrder,
    rowNumber,
    title,
    setTitle,
    headingReadFactory,
    headingUpdateFactory,
    dataReadFactory,
    dataUpdateFactory,
    addRow,
    addColumn,
    deleteRow,
    deleteColumn,
    swapRow,
    swapColumn,
    duplicateRow,
    cutRow,
    cutColumn,
    copyRow,
    copyColumn,
    pasteRow,
    pasteColumn,
    importTable,
    exportTable,
    newTable,
  };
}
