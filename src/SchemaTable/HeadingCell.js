import React from 'react';
import styled from 'styled-components';

export const HeadingCell = ({ readValue, updateValue }) => {
  const handleInput = (e) => {
    e.preventDefault();
    // Disable new lines 
    if (e.nativeEvent.inputType === 'insertLineBreak') return;
    updateValue(e.target.value);
  };

  return (
    <StyledHeading>
      <textarea
        value={readValue() || ''}
        onInput={handleInput}
        rows="1"
        cols="20"
        maxLength="20"
      >
        {readValue()}
      </textarea>
    </StyledHeading>
  );
};

const StyledHeading = styled.th`
  textarea {
    font-weight: bold;
    text-align: center;
  }
`;
