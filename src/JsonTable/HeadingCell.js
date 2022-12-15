import React, { useState } from 'react';
import { useRef } from 'react';
import styled from 'styled-components';
import { ContextualMenu } from './JsonTable.styled';

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
  const [contextMenu, setContextMenu] = useState(null);

  const handleInput = (e) => {
    e.preventDefault();
    // Disable new lines
    if (e.nativeEvent.inputType === 'insertLineBreak') return;
    updateValue(e.target.value);
  };

  const PropsContextMenu = ({ xPos, yPos }) => {
    const ref = useRef(null);
    return (
      <ContextualMenu
        {...{ xPos, yPos }}
        ref={ref}
        tabIndex={0}
        onBlur={(e) => {
          e.stopPropagation();
          console.log(e.currentTarget);
        }}
      >
        <button onClick={moveLeft}> Move Back</button>
        <button onClick={moveRight}> Move Foward </button>
        <button onClick={deleteSelf}>Delete Column</button>
        <button onClick={copyColumn}>Copy column</button>
        <button onClick={cutColumn}>Cut Column</button>
        <button onClick={pasteLeft}>Paste to the left</button>
        <button onClick={pasteRight}>Paste to the right</button>
      </ContextualMenu>
    );
  };

  return (
    <StyledHeading
      {...props}
      onContextMenu={(e) => {
        e.preventDefault();
        setContextMenu(<PropsContextMenu xPos={0} yPos={0} />);
      }}
    >
      <textarea
        value={readValue() || ''}
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
