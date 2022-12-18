import React, { useState } from 'react';
import styled from 'styled-components';
import DropDownMenu from '../components/DropDownMenu';
import { useDispatch, useSelector } from 'react-redux';
import {
  addProperty,
  copyProperty,
  cutProperty,
  deleteProperty,
  pasteProperty,
  swapProperties,
  updateHeadingCell,
} from '../app/slices/tableSlice';

export const HeadingCell = ({ propertyIndex }) => {
  propertyIndex = parseInt(propertyIndex);
  const dispatch = useDispatch();
  const schema = useSelector((state) => state.table.schema);
  
  const [contextMenu, setContextMenu] = useState(null);
  
  const handleInput = (e) => {
    e.preventDefault();
    // Disable new lines
    if (e.nativeEvent.inputType === 'insertLineBreak') return;
    dispatch(updateHeadingCell({ propertyIndex, data: e.target.value }));
  };

  return (
    <StyledHeading
      onContextMenu={(e) => {
        e.preventDefault();
        setContextMenu(
          <HeadinCellContextMenu
            xPos={e.clientX}
            yPos={e.clientY}
            updateShowContextMenu={() => setContextMenu(null)}
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

const HeadinCellContextMenu = ({
  xPos,
  yPos,
  updateShowContextMenu,
  propertyIndex,
}) => {
  
  const dispatch = useDispatch();

  const addBefore = () => {
    dispatch(addProperty({ propertyIndex }));
  };

  const addAfter = () => {
    dispatch(addProperty({ propertyIndex: propertyIndex + 1 }));
  };

  const moveBefore = () => {
    dispatch(
      swapProperties({
        selectedIndex: propertyIndex,
        targetIndex: propertyIndex - 1,
      })
    );
  };

  const moveAfter = () => {
    dispatch(
      swapProperties({
        selectedIndex: propertyIndex,
        targetIndex: propertyIndex + 1,
      })
    );
  };

  const selfDelete = () => {
    dispatch(deleteProperty({ propertyIndex }));
  };

  const copy = () => {
    dispatch(copyProperty({ propertyIndex }));
  };

  const cut = () => {
    dispatch(cutProperty({ propertyIndex }));
  };

  const pasteBefore = () => {
    // Array.slice is used for including elements mid array
    // so pasting in the same index pushes the old element foward
    dispatch(pasteProperty({ propertyIndex }));
  };

  const pasteAfter = () => {
    dispatch(pasteProperty({ propertyIndex: propertyIndex + 1 }));
  };

  return (
    <DropDownMenu {...{ xPos, yPos, blurHandler }}>
      <button onClick={addBefore}> Add Before</button>
      <button onClick={addAfter}> Add After</button>
      <button onClick={moveBefore}> Move Back</button>
      <button onClick={moveAfter}> Move Foward</button>
      <button onClick={selfDelete}>Delete</button>
      <button onClick={copy}>Copy</button>
      <button onClick={cut}>Cut</button>
      <button onClick={pasteBefore}>Paste Before</button>
      <button onClick={pasteAfter}>Paste After</button>
    </DropDownMenu>
  );
};

const StyledHeading = styled.th`
  textarea {
    font-weight: bold;
    text-align: center;
  }
`;
