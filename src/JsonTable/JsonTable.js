import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addProperty,
  setSelected,
  addInstance,
} from '../redux/slices/tableSlice';
import { StyledTable } from './JsonTable.styles';
import { TableBody } from './TableBody/TableBody';
import { TableHead } from './TableHead/TableHead';
import TablePlaceholder from './TablePlaceholder';

export function JsonTable() {
  const dispatch = useDispatch();
  const isVertical = useSelector((state) => state.uiKnobs.isVertical);
  const isTableEmpty = !Boolean(
    useSelector((state) => state.table.instances).length
  );

  useEffect(() => {
    const clickToUnselect = (e) => {
      const elementContainsClass = e.target.classList.contains('heading-cell');
      const parentContainsClass =
        e.target.parentNode.tagName === 'TH' &&
        e.target.parentNode.classList.contains('heading-cell');

      if (!(elementContainsClass || parentContainsClass)) {
        dispatch(setSelected({ type: null, index: null }));
      }
    };
    document.body.addEventListener('click', clickToUnselect);
    return () => {
      document.body.removeEventListener('click', clickToUnselect);
    };
  }, [dispatch]);

  if (isTableEmpty) {
    return <TablePlaceholder />;
  }

  return (
    <StyledTable.Container>
      <StyledTable.Table tabIndex="0" isVertical={isVertical}>
        <TableHead />
        <TableBody />
      </StyledTable.Table>
      {/* Add Property */}
      <AddEntityButton
        handleClick={() => dispatch(addInstance({}))}
        isVerticalButton={!isVertical} // original oriention is not vertical
        label="Add Instance"
      />
      {/* Add Instance */}
      <AddEntityButton
        handleClick={() => dispatch(addProperty({}))}
        isVerticalButton={isVertical} // original oriention is vertical
        label="Add Property"
      />
    </StyledTable.Container>
  );
}

const AddEntityButton = ({ handleClick, isVerticalButton, label }) => {
  return (
    <StyledTable.AddEntityButton
      aria-label={label}
      isVerticalButton={isVerticalButton}
      onClick={handleClick}
    >
      <StyledTable.AddEntityIcon />
    </StyledTable.AddEntityButton>
  );
};
