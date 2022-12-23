import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateDataCell } from '../../app/slices/tableSlice';

export const DataCell = ({ accessCoordinates, className }) => {
  const table = useSelector((state) => state.table.instances);
  const schema = useSelector((state) => state.table.schema);
  const dispatch = useDispatch();

  const { instanceIndex, propertyIndex } = accessCoordinates;
  const propertyName = schema[propertyIndex].name;
  const cellValue = table[instanceIndex][propertyName];

  const handleInput = (e) => {
    dispatch(
      updateDataCell({ instanceIndex, propertyName, data: e.target.value })
    );
  };

  return (
    <td className={className}>
      <textarea value={cellValue || ''} onInput={handleInput}></textarea>
    </td>
  );
};
