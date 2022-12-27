import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { repeatForAll } from '../../redux/slices/tableSlice';
import { createPortal } from 'react-dom';
import { setModal } from '../../redux/slices/uiKnobsSlice';
import { StyledMassInsertInput } from './MassInsertInput.styles';

export const MassInsertInput = ({ propertyIndex }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const closeParent = (e) => {
    dispatch(setModal({}));
  };

  return createPortal(
    <StyledMassInsertInput.Backdrop>
      <StyledMassInsertInput.Container>
        <StyledMassInsertInput.Textarea
          value={text}
          onInput={(e) => setText(e.target.value)}
        />
        <StyledMassInsertInput.Button
          onClick={(e) => {
            dispatch(repeatForAll({ propertyIndex, newValue: text }));
            closeParent(e);
          }}
        >
          Insert values
        </StyledMassInsertInput.Button>
        <StyledMassInsertInput.Button
          onClick={(e) => {
            closeParent(e);
          }}
        >
          Cancel
        </StyledMassInsertInput.Button>
      </StyledMassInsertInput.Container>
    </StyledMassInsertInput.Backdrop>,
    document.querySelector('#modal-portal')
  );
};
