import React from 'react';
import { StyledRotateButton } from './RotateButton.styles';

export const RotateButton = ({ setIsVertical }) => {
  return (
    <StyledRotateButton.Container
      scope="col"
      className="index-heading"
      onContextMenu={(e) => e.preventDefault()}
    >
      <StyledRotateButton.Button onClick={() => setIsVertical((bool) => !bool)}>
        Rotate
      </StyledRotateButton.Button>
    </StyledRotateButton.Container>
  );
};
