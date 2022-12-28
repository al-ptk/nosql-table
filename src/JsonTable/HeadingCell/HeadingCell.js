import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateHeadingCell, setSelected } from '../../redux/slices/tableSlice';
import { HeadinCellContextMenu } from './HeadinCell.ContextMenu';
import { StyledHeadingCell } from './HeadingCell.styles';

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
    <StyledHeadingCell.Container
      className={className}
      tabIndex={-1}
      onClick={(e) => {
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
      <StyledHeadingCell.Textarea
        onFocus={() => {
          dispatch(setSelected({ type: 'property', index: propertyIndex }));
        }}
        value={schema[propertyIndex].name || ''}
        onInput={handleInput}
        rows="1"
        cols="20"
        maxLength="20"
      ></StyledHeadingCell.Textarea>
      {contextMenu}
    </StyledHeadingCell.Container>
  );
};
