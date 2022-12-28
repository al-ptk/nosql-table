import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateDataCell } from '../../redux/slices/tableSlice';
import { StyledDataCell } from './DataCell.styles';
import ExpandedCellModal from '../../modals/ExpandedCellModal';
import { setModal } from '../../redux/slices/uiKnobsSlice';

export const DataCell = ({ accessCoordinates, className }) => {
  const [cellValue, handleInput] = useCellAccessor(accessCoordinates);
  const isVertical = useSelector((state) => state.uiKnobs.isVertical);
  const dispatch = useDispatch();

  return (
    <StyledDataCell.Container
      className={className}
      isVertical={isVertical}
      onDoubleClick={() =>
        dispatch(
          setModal({ modal: <ExpandedCellModal {...{ accessCoordinates }} /> })
        )
      }
    >
      <StyledDataCell.Textarea
        value={cellValue || ''}
        onInput={handleInput}
        // The code below gives a tip when textarea overflows.
        // @todo tooltip component
        //
        // onMouseOver={(e) => {
        //   if(tipHasBeenGiven('textarea-overflow')) return;
        //   const elem = e.target;
        //   if (elem.clientHeight < elem.scrollHeight) {
        //     "render tooltip component"
        //   }
        // }}
      />
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
