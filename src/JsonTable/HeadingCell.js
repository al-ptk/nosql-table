import React, { useState } from 'react';
import styled from 'styled-components';
import DropDownMenu from '../DropDownMenu';

export const HeadingCell = ({
  readValue,
  updateValue,
  deleteSelf,
  moveLeft,
  moveRight,
  copyColumn,
  cutColumn,
  pasteLeft,
  pasteRight,
  ...props
}) => {
  const [showContextMenu, setShowContextMenu] = useState(false);

  const handleInput = (e) => {
    e.preventDefault();
    // Disable new lines
    if (e.nativeEvent.inputType === 'insertLineBreak') return;
    updateValue(e.target.value);
  };

  const PropsContextMenu = ({ xPos, yPos }) => {
    return (
      <DropDownMenu
        blurHandler={() => {
          setShowContextMenu(false);
        }}
        {...{ xPos, yPos }}
      >
        <button onClick={moveLeft}> Move Back</button>
        <button onClick={moveRight}> Move Foward </button>
        <button onClick={deleteSelf}>Delete Column</button>
        <button onClick={copyColumn}>Copy column</button>
        <button onClick={cutColumn}>Cut Column</button>
        <button onClick={pasteLeft}>Paste to the left</button>
        <button onClick={pasteRight}>Paste to the right</button>
      </DropDownMenu>
    );
  };

  return (
    <StyledHeading
      {...props}
      onContextMenu={(e) => {
        e.preventDefault();
        setShowContextMenu([e.clientX, e.clientY]);
        console.log(e);
      }}
    >
      <textarea
        value={readValue() || ''}
        onInput={handleInput}
        rows="1"
        cols="20"
        maxLength="20"
      ></textarea>
      {showContextMenu && (
        <PropsContextMenu xPos={showContextMenu[0]} yPos={showContextMenu[1]} />
      )}
    </StyledHeading>
  );
};

const StyledHeading = styled.th`
  textarea {
    font-weight: bold;
    text-align: center;
  }
`;
