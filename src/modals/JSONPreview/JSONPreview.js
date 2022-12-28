import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { togglePreview } from '../../redux/slices/uiKnobsSlice';
import { Modal } from '../Modal.styles';
import { StyledJSONPreview } from './JSONPreview.styles';

export function JSONPreview() {
  const instances = useSelector((state) => state.table.instances);
  const showPreview = useSelector((state) => state.uiKnobs.showPreview);
  const dispatch = useDispatch();

  return showPreview ? (
    <Modal.Backdrop>
      <Modal.Container>
        <Modal.CloseButton onClick={() => dispatch(togglePreview())}>
          <Modal.CloseIcon />
        </Modal.CloseButton>
        <StyledJSONPreview.Formatter
          json={JSON.stringify(instances)}
          tabWith={4}
        />
      </Modal.Container>
    </Modal.Backdrop>
  ) : null;
}
