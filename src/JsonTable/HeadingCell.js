import React from 'react';
import styled from 'styled-components';

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
  const handleInput = (e) => {
    e.preventDefault();
    // Disable new lines
    if (e.nativeEvent.inputType === 'insertLineBreak') return;
    updateValue(e.target.value);
  };

  return (
    <StyledHeading {...props}>
      <p>
        <button onClick={moveLeft}> {'<'} </button>
        <textarea
          value={readValue() || ''}
          onInput={handleInput}
          rows="1"
          cols="20"
          maxLength="20"
        ></textarea>
        <button onClick={moveRight}> {'>'} </button>
        <button onClick={deleteSelf}>X</button>
      </p>
      <p>
        <button onClick={copyColumn}>Copy column</button>
      </p>
      <p>
        <button onClick={cutColumn}>Cut Column</button>
      </p>
      <p>
        <button onClick={pasteLeft}>Paste to the left</button>
      </p>
      <p>
        <button onClick={pasteRight}>Paste to the right</button>
      </p>
    </StyledHeading>
  );
};

const StyledHeading = styled.th`
  textarea {
    font-weight: bold;
    text-align: center;
  }
`;
