import { useState } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useCellAccessor } from '../../JsonTable/DataCell/DataCell';
import { Modal } from '../Modal.styles';
import { setModal } from '../../redux/slices/uiKnobsSlice';

export function ExpandedCellModal({ accessCoordinates }) {
  const [cellValue, handleInput] = useCellAccessor(accessCoordinates);
  const { instanceIndex, propertyIndex } = accessCoordinates;
  const propertyName = useSelector((state) => state.table.schema)[propertyIndex]
    .name;
  const [text, setText] = useState(cellValue);
  const dispatch = useDispatch();

  const confirmChange = () => {
    handleInput({ target: { value: text } }); // simulate the e.target.value access
    dispatch(setModal({}));
  };

  return createPortal(
    <Modal.Backdrop>
      <Modal.Container>
        <Modal.CloseButton
          onClick={(e) => {
            dispatch(setModal({}));
          }}
        >
          <Modal.CloseIcon />
        </Modal.CloseButton>
        <div style={{ margin: '-50px 0 20px 0' }}>
          <Modal.Title>Instance {instanceIndex}</Modal.Title>
          <Modal.Title>Property: {propertyName}</Modal.Title>
        </div>
        <Modal.Textarea
          value={text}
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
            Confirm
          </Modal.Button>
          <Modal.Button
            onClick={(e) => {
              dispatch(setModal({}));
            }}
          >
            Cancel
          </Modal.Button>
        </Modal.ButtonHolder>
      </Modal.Container>
    </Modal.Backdrop>,
    document.querySelector('#modal-portal')
  );
}
