import { useState } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useCellAccessor } from '../../JsonTable/DataCell/DataCell';
import { Modal } from '../Modal.styles';
import { StyledExpandedCellModal } from './ExpandedCellModal.styles';
import { setModal } from '../../redux/slices/uiKnobsSlice';

export function ExpandedCellModal({ accessCoordinates }) {
  const [cellValue, handleInput] = useCellAccessor(accessCoordinates);
  const { instanceIndex, propertyIndex } = accessCoordinates;
  const propertyName = useSelector((state) => state.table.schema)[propertyIndex]
    .name;
  const [text, setText] = useState(cellValue);
  const dispatch = useDispatch();

  return createPortal(
    <Modal.Backdrop>
      <Modal.Container cssOverride={StyledExpandedCellModal.ContainerOverride}>
        <Modal.CloseButton
          onClick={(e) => {
            dispatch(setModal({}));
          }}
        >
          <Modal.CloseIcon />
        </Modal.CloseButton>
        <div style={{ margin: '-50px 0 20px 0' }}>
          <StyledExpandedCellModal.Title>
            Instance {instanceIndex}
          </StyledExpandedCellModal.Title>
          <StyledExpandedCellModal.Title>
            Property: {propertyName}
          </StyledExpandedCellModal.Title>
        </div>
        <StyledExpandedCellModal.Textarea
          value={text}
          onInput={(e) => setText(e.target.value)}
        />
        <StyledExpandedCellModal.ButtonHolder>
          <Modal.Button
            onClick={() => {
              handleInput({ target: { value: text } }); // simulate the e.target.value access
              dispatch(setModal({}));
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
        </StyledExpandedCellModal.ButtonHolder>
      </Modal.Container>
    </Modal.Backdrop>,
    document.querySelector('#modal-portal')
  );
}
