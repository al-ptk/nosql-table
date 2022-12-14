import { useState } from 'react';
import { getAllKeys } from '../utils/helperFunctions';
import mockTable from '../mockTable.json';
import { useEffect } from 'react';

const emptyTable =
  ![
    { 'property 0': '', 'property 1': '' },
    { 'property 0': '', 'property 1': '' },
  ] || mockTable;

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

  const addColumn = () => {
    const newProp = `property ${headingOrder.length}`;

    // Update Headings
    setHeadingOrder(headingOrder.concat(newProp));

    // Update Rows
    setTableRows(
      tableRows.map((row) => {
        row[newProp] = '';
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

  const duplicateColumn = (headingIndex) => {};

  const cutColumn = (headingIndex) => {};

  const copyColumn = (headingIndex) => {};

  const pasteColumn = (headingIndex) => {};

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

  const cutRow = (rowIndex) => {
    let data = tableRows[rowIndex];
    setClipboard({ type: 'row', data });
    deleteRow(rowIndex);
  };

  const copyRow = (rowIndex) => {
    let data = tableRows[rowIndex];
    setClipboard({ type: 'row', data });
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
    duplicateColumn,
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
