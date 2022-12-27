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

export function JsonTable() {
  const dispatch = useDispatch();
  const isVertical = useSelector((state) => state.uiKnobs.isVertical);

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
    <StyledTable.Container>
      <StyledTable.Table tabIndex="0" isVertical={isVertical}>
        <TableHead />
        <TableBody />
      </StyledTable.Table>
      <StyledTable.AddEntityButton
        top={0}
        left={'100%'}
        width={'fit-content'}
        height={'100%'}
        onClick={() => dispatch(addProperty({}))}
      >
        Add Property
      </StyledTable.AddEntityButton>
      <StyledTable.AddEntityButton
        top={'100%'}
        left={0}
        width={'100%'}
        height={'25px'}
        onClick={() => dispatch(addInstance({}))}
      >
        Add Instance
      </StyledTable.AddEntityButton>
    </StyledTable.Container>
  );
}
