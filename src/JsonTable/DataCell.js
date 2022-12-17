import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateDataCell } from '../app/slices/tableSlice';

export const DataCell = ({ accessCoordinates }) => {
  const table = useSelector((state) => state.table.instances);
  const dispatch = useDispatch();

  const { instanceIndex, propertyName } = accessCoordinates;
  const cellValue = table[instanceIndex][propertyName];

  const handleInput = (e) => {
    dispatch(
      updateDataCell({ instanceIndex, propertyName, data: e.target.value })
    );
  };

  return (
    <td>
      <textarea value={cellValue || ''} onInput={handleInput}></textarea>
    </td>
  );
};
