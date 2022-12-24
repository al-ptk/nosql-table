import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setSelected } from '../redux/slices/tableSlice';
import { StyledTable } from './JsonTable.styled';
import { TableBody } from './TableBody/TableBody';
import { TableHead } from './TableHead/TableHead';

export function JsonTable({ isVertical, setIsVertical }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const clickToUnselect = (e) => {
      if (e.target === document.body) {
        dispatch(setSelected({ type: null, index: null }));
      }
    };
    document.body.addEventListener('click', clickToUnselect);
    return () => {
      document.body.removeEventListener('click', clickToUnselect);
    };
  }, [dispatch]);

  return (
    <StyledTable tabIndex="0" isVertical={isVertical}>
      <TableHead setIsVertical={setIsVertical} />
      <TableBody />
    </StyledTable>
  );
}
