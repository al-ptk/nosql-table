import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DeleteEntityButton from '../../components/DeleteEntityButton';
import {
  updateHeadingCell,
  setSelected,
  deleteProperty,
} from '../../redux/slices/tableSlice';
import { HeadinCellContextMenu } from './HeadinCell.ContextMenu';
import { StyledHeadingCell } from './HeadingCell.styles';

export const HeadingCell = ({ propertyIndex, className }) => {
  propertyIndex = parseInt(propertyIndex);
  const dispatch = useDispatch();
  const schema = useSelector((state) => state.table.schema);
  const [contextMenu, setContextMenu] = useState(null);
  const [deleteButton, setDeleteButton] = useState(null);

  const handleClick = (e) => {
    dispatch(setSelected({ type: 'property', index: propertyIndex }));
  };

  const handleContextMenu = (e) => {
    e.preventDefault();
    setContextMenu(
      <HeadinCellContextMenu
        xPos={e.clientX}
        yPos={e.clientY}
        closeMenu={() => setContextMenu(null)}
        propertyIndex={propertyIndex}
      />
    );
  };

  const handleMouseOver = () => {
    setDeleteButton(
      <DeleteEntityButton
        onClick={() => dispatch(deleteProperty({ propertyIndex }))}
      >
        {/* @todo Add X icon */}X
      </DeleteEntityButton>
    );
  };

  // Used on Textarea
  const handleInput = (e) => {
    e.preventDefault();
    if (e.nativeEvent.inputType === 'insertLineBreak') return; // Disable linebreaks
    dispatch(updateHeadingCell({ propertyIndex, data: e.target.value }));
  };

  return (
    <StyledHeadingCell.Container
      className={className}
      tabIndex={-1}
      onClick={handleClick}
      onContextMenu={handleContextMenu}
      onMouseOver={handleMouseOver}
      onMouseLeave={() => setDeleteButton(null)}
    >
      {deleteButton}
      <StyledHeadingCell.Textarea
        onFocus={() => {
          dispatch(setSelected({ type: 'property', index: propertyIndex }));
        }}
        value={schema[propertyIndex].name || ''}
        onInput={handleInput}
        rows="1"
        cols="20"
        maxLength="20"
      />
      {contextMenu}
    </StyledHeadingCell.Container>
  );
};
