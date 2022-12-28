import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { repeatForAll } from '../../redux/slices/tableSlice';
import { createPortal } from 'react-dom';
import { setModal } from '../../redux/slices/uiKnobsSlice';
import { StyledMassInsertInput } from './MassInsertInput.styles';
import { Modal } from '../Modal.styles';

export const MassInsertInput = ({ propertyIndex }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const closeParent = (e) => {
    dispatch(setModal({}));
  };

  return createPortal(
    <Modal.Backdrop>
      <Modal.Container>
        <StyledMassInsertInput.Textarea
          value={text}
          onInput={(e) => setText(e.target.value)}
        />
        <Modal.Button
          onClick={(e) => {
            dispatch(repeatForAll({ propertyIndex, newValue: text }));
            closeParent(e);
          }}
        >
          Insert values
        </Modal.Button>
        <Modal.Button
          onClick={(e) => {
            closeParent(e);
          }}
        >
          Cancel
        </Modal.Button>
      </Modal.Container>
    </Modal.Backdrop>,
    document.querySelector('#modal-portal')
  );
};
