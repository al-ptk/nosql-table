import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleIsVertical } from '../../../redux/slices/uiKnobsSlice';
import { StyledRotateButton } from './RotateButton.styles';

export const RotateButton = () => {
  const dispatch = useDispatch();

  return (
    <StyledRotateButton.Container
      scope="col"
      className="index-heading"
      onContextMenu={(e) => e.preventDefault()}
    >
      <StyledRotateButton.Button onClick={() => dispatch(toggleIsVertical())}>
        <StyledRotateButton.ButtonIcon />
      </StyledRotateButton.Button>
    </StyledRotateButton.Container>
  );
};
