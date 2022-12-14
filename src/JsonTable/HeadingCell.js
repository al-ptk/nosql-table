import React from 'react';
import styled from 'styled-components';

export const HeadingCell = ({
  readValue,
  updateValue,
  deleteSelf,
  moveLeft,
  moveRight,
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
    </StyledHeading>
  );
};

const StyledHeading = styled.th`
  textarea {
    font-weight: bold;
    text-align: center;
  }
`;
