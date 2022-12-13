import { useState } from 'react';
import { getAllKeys } from '../utils/helperFunctions';

const emptyTable = [
  { 'property 0': '', 'property 1': '' },
  { 'property 0': '', 'property 1': '' },
];

// @remove ???
function* propertyNumberGenerator(initialValue = 0) {
  let i = initialValue;
  while (true) {
    yield i;
    i++;
  }
}
const propNumGen = propertyNumberGenerator(emptyTable.length);

export default function useTableManager(tableStream = emptyTable.slice()) {
  const [tableRows, setTableRows] = useState(tableStream);
  const [headingOrder, setHeadingOrder] = useState(getAllKeys(tableStream));
  const [rowNumber, setRowNumber] = useState(tableStream.length);
  const [title, setTitle] = useState('JSON table');

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
    setRowNumber(emptyTable.length);
    setTitle('New Table');
  };

  const addColumn = () => {
    const newProp = `property ${propNumGen.next().value}`;

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

  const addRow = () => {
    const newRow = Object.fromEntries(
      headingOrder.map((heading) => [heading, ''])
    );
    setTableRows(tableRows.concat(newRow));
    setRowNumber(rowNumber + 1);
  };

  const deleteRow = (index) => {
    let shallowTable = tableRows.filter(
      (row, rowIndex) => parseInt(index) !== parseInt(rowIndex)
    );
    setRowNumber(shallowTable.length);
    setTableRows(shallowTable);
  };

  //  ---------------------------- File Manipulation ---------------------------
  const importTable = (fileInput) => {
    const reader = new FileReader();
    reader.readAsText(fileInput.current.files[0]);
    reader.onload = function () {
      const newTable = JSON.parse(reader.result);
      setHeadingOrder(getAllKeys(newTable));
      setTableRows(newTable);
      setRowNumber(newTable.length);
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
    setRowNumber,
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
    importTable,
    exportTable,
    newTable,
  };
}
