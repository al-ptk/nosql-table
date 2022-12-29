import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { repeatForAll } from '../../redux/slices/tableSlice';
import { createPortal } from 'react-dom';
import { setModal } from '../../redux/slices/uiKnobsSlice';
import { Modal } from '../Modal.styles';

export const MassInsertInput = ({ propertyIndex }) => {
  const dispatch = useDispatch();
  const propertyName = useSelector((state) => state.table.schema)[propertyIndex]
    .name;
  const [text, setText] = useState('');
  const closeParent = () => {
    dispatch(setModal({}));
  };

  const confirmChange = () => {
    dispatch(repeatForAll({ propertyIndex, newValue: text }));
    closeParent();
  };

  return createPortal(
    <Modal.Backdrop>
      <Modal.Container>
        <Modal.CloseButton onClick={closeParent}>
          <Modal.CloseIcon />
        </Modal.CloseButton>
        <Modal.Title style={{ margin: '-40px 0 30px 0' }}>
          Insert for <span style={{fontWeight: 'bold'}}>{propertyName}</span>
        </Modal.Title>
        <Modal.Textarea
          value={text}
          autoFocus={true}
          onInput={(e) => {
            if (e.nativeEvent.inputType === 'insertLineBreak') {
              return confirmChange();
            }
            setText(e.target.value);
          }}
        />
        <Modal.ButtonHolder>
          <Modal.Button
            onClick={() => {
              confirmChange();
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
        </Modal.ButtonHolder>
      </Modal.Container>
    </Modal.Backdrop>,
    document.querySelector('#modal-portal')
  );
};
