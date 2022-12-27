import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { repeatForAll } from '../../redux/slices/tableSlice';
import { createPortal } from 'react-dom';
import { setModal } from '../../redux/slices/uiKnobsSlice';
import { StyledRepeatedInput } from './RepeatedInsertInput.styles';

export const RepeatedInsertInput = ({ propertyIndex }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const closeParent = (e) => {
    dispatch(setModal({}));
  };

  return createPortal(
    <StyledRepeatedInput.Backdrop>
      <StyledRepeatedInput.Container>
        <StyledRepeatedInput.Textarea
          value={text}
          onInput={(e) => setText(e.target.value)}
        />
        <StyledRepeatedInput.Button
          onClick={(e) => {
            dispatch(repeatForAll({ propertyIndex, newValue: text }));
            closeParent(e);
          }}
        >
          Repeat Values!
        </StyledRepeatedInput.Button>
        <StyledRepeatedInput.Button
          onClick={(e) => {
            closeParent(e);
          }}
        >
          Cancel!
        </StyledRepeatedInput.Button>
      </StyledRepeatedInput.Container>
    </StyledRepeatedInput.Backdrop>,
    document.querySelector('#modal-portal')
  );
};
