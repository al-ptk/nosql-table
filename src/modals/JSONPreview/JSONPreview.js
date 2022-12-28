import React from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setModal } from '../../redux/slices/uiKnobsSlice';
import { Modal } from '../Modal.styles';
import { StyledJSONPreview } from './JSONPreview.styles';

export function JSONPreview() {
  const instances = useSelector((state) => state.table.instances);
  const dispatch = useDispatch();

  return createPortal(
    <Modal.Backdrop>
      <Modal.Container>
        <Modal.CloseButton onClick={() => dispatch(setModal({}))}>
          <Modal.CloseIcon />
        </Modal.CloseButton>
        <StyledJSONPreview.Formatter
          json={JSON.stringify(instances)}
          tabWith={4}
        />
      </Modal.Container>
    </Modal.Backdrop>,
    document.querySelector('#modal-portal')
  );
}
