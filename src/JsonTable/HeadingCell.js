import React, { useRef, useState } from 'react';
import styled from 'styled-components';
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
import { ContextMenu, ContextMenuButton } from '../components/ContextMenu';
import { useEffect } from 'react';

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
  propertyIndex = parseInt(propertyIndex);

  const Reference = useRef(null);

  // As soon as component mounts, give it focus
  useEffect(() => {
    Reference.current.focus();
  }, [Reference]);

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
    <ContextMenu
      {...{ xPos, yPos, Reference }}
      closeContextMenu={updateShowContextMenu}
    >
      <ContextMenuButton
        closeContextMenu={updateShowContextMenu}
        buttonText={'Add Before'}
        buttonAction={addBefore}
      />
      <ContextMenuButton
        closeContextMenu={updateShowContextMenu}
        buttonText={'Add After'}
        buttonAction={addAfter}
      />
      <ContextMenuButton
        closeContextMenu={updateShowContextMenu}
        buttonText={'Move Back'}
        buttonAction={moveBefore}
      />
      <ContextMenuButton
        closeContextMenu={updateShowContextMenu}
        buttonText={'Move Foward'}
        buttonAction={moveAfter}
      />
      <ContextMenuButton
        closeContextMenu={updateShowContextMenu}
        buttonText={'Delete'}
        buttonAction={selfDelete}
      />
      <ContextMenuButton
        closeContextMenu={updateShowContextMenu}
        buttonText={'Copy'}
        buttonAction={copy}
      />
      <ContextMenuButton
        closeContextMenu={updateShowContextMenu}
        buttonText={'Cut'}
        buttonAction={cut}
      />
      <ContextMenuButton
        closeContextMenu={updateShowContextMenu}
        buttonText={'Paste Before'}
        buttonAction={pasteBefore}
      />
      <ContextMenuButton
        closeContextMenu={updateShowContextMenu}
        buttonText={'Paste After'}
        buttonAction={pasteAfter}
      />
    </ContextMenu>
  );
};

const StyledHeading = styled.th`
  textarea {
    font-weight: bold;
    text-align: center;
  }
`;
