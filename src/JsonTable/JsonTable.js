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
    <div
      style={{
        margin: '100px auto',
        width: 'fit-content',
        maxWidth: '80vw',
        position: 'relative',
      }}
    >
      <StyledTable tabIndex="0" isVertical={isVertical}>
        <TableHead />
        <TableBody />
      </StyledTable>
      <button
        style={{
          height: '100%',
          width: 'fit-content',
          color: 'rgba(255,255,255, .5)',
          backgroundColor: 'rgba(0,0,0,.5)',
          border: 'none',
          position: 'absolute',
          left: '100%',
          top: 0,
          zIndex: 200,
        }}
        onClick={() => dispatch(addProperty({}))}
      >
        Add Property
      </button>
      <button
        style={{
          height: '25px',
          width: '100%',
          color: 'rgba(255,255,255, .5)',
          backgroundColor: 'rgba(0,0,0,.5)',
          border: 'none',
          position: 'absolute',
          left: 0,
          top: '100%',
          zIndex: 200,
        }}
        onClick={() => dispatch(addInstance({}))}
      >
        Add Instance
      </button>
    </div>
  );
}
