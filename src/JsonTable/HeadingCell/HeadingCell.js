import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
// Imports all actions that operate on the table, to turn them into buttons
import { updateHeadingCell, setSelected } from '../../redux/slices/tableSlice';
import { HeadinCellContextMenu } from './HeadinCellContextMenu';

export const HeadingCell = ({ propertyIndex, className }) => {
  propertyIndex = parseInt(propertyIndex);
  const dispatch = useDispatch();
  const schema = useSelector((state) => state.table.schema);

  const [contextMenu, setContextMenu] = useState(null);

  const handleInput = (e) => {
    e.preventDefault();
    if (e.nativeEvent.inputType === 'insertLineBreak') return; // Disable linebreaks
    dispatch(updateHeadingCell({ propertyIndex, data: e.target.value }));
  };

  return (
    <StyledHeading
      className={className}
      tabIndex={-1}
      onBlur={() => {
        dispatch(setSelected({ type: null, index: null }));
      }}
      onClick={() => {
        dispatch(setSelected({ type: 'property', index: propertyIndex }));
      }}
      onContextMenu={(e) => {
        e.preventDefault();
        setContextMenu(
          <HeadinCellContextMenu
            xPos={e.clientX}
            yPos={e.clientY}
            closeMenu={() => setContextMenu(null)}
            propertyIndex={propertyIndex}
          />
        );
      }}
    >
      <textarea
        value={schema[propertyIndex].name || ''}
        onInput={handleInput}
        rows="1"
        cols="20"
        maxLength="20"
      ></textarea>
      {contextMenu}
    </StyledHeading>
  );
};

const StyledHeading = styled.th`
  textarea {
    font-weight: bold;
    text-align: center;
  }
`;
