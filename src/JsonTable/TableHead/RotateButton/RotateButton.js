import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { toggleIsVertical } from '../../../redux/slices/uiKnobsSlice';
import { StyledRotateButton } from './RotateButton.styles';
import { LanguageContext } from '../../../App';

export const RotateButton = () => {
  const language = useContext(LanguageContext);
  const dispatch = useDispatch();

  return (
    <StyledRotateButton.Container
      scope="col"
      className="index-heading"
      onContextMenu={(e) => e.preventDefault()}
    >
      <StyledRotateButton.Button
        onClick={() => dispatch(toggleIsVertical())}
        aria-label={language['rotateTable']}
      >
        <StyledRotateButton.ButtonIcon />
      </StyledRotateButton.Button>
    </StyledRotateButton.Container>
  );
};
