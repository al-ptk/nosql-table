import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ExpandedCellModal } from '../../components/ExpandedCellModal/ExpandedCellModal';
import { updateDataCell } from '../../redux/slices/tableSlice';
import { StyledDataCell } from './DataCell.styles';

export const DataCell = ({ accessCoordinates, className }) => {
  const [cellValue, handleInput] = useCellAccessor(accessCoordinates);
  const [expandedCell, setExpandedCell] = useState(null);

  return (
    <StyledDataCell.Container
      className={className}
      onDoubleClick={() =>
        setExpandedCell(<ExpandedCellModal {...{ accessCoordinates }} />)
      }
    >
      <StyledDataCell.Textarea value={cellValue || ''} onInput={handleInput} />
      {expandedCell}
    </StyledDataCell.Container>
  );
};

export function useCellAccessor({ instanceIndex, propertyIndex }) {
  const table = useSelector((state) => state.table.instances);
  const schema = useSelector((state) => state.table.schema);
  const dispatch = useDispatch();

  const propertyName = schema[propertyIndex].name;
  const cellValue = table[instanceIndex][propertyName];

  const handleInput = (e) => {
    dispatch(
      updateDataCell({ instanceIndex, propertyName, data: e.target.value })
    );
  };

  return [cellValue, handleInput];
}
