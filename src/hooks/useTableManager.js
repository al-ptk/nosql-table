import { useState } from 'react';
import { getAllKeys } from '../utils/helperFunctions';

const emptyTable = [
  { 'property 0': '', 'property 1': '' },
  { 'property 0': '', 'property 1': '' },
];

export default function useTableManager(tableStream = emptyTable) {
  const [tableRows, setTableRows] = useState(tableStream);
  const [headingOrder, setHeadingOrder] = useState(getAllKeys(tableStream));
  const [rowNumber, setRowNumber] = useState(tableStream.length);
  const [title, setTitle] = useState('JSON table');

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
  };
}
