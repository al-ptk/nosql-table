import { useRef } from 'react';
import { createPortal } from 'react-dom';
import { useCellAccessor } from '../../JsonTable/DataCell/DataCell';
import { Modal } from '../Modal.styles';
import { StyledExpandedCellModal } from './ExpandedCellModal.styles';

export function ExpandedCellModal({ accessCoordinates }) {
  const [cellValue, handleInput] = useCellAccessor(accessCoordinates);
  const ref = useRef(null);

  return createPortal(
    <Modal.Backdrop ref={ref}>
      <Modal.Container>
        <Modal.CloseButton
          onClick={(e) => {
            ref.current.remove();
          }}
        >
          <Modal.CloseIcon />
        </Modal.CloseButton>
        <StyledExpandedCellModal.Textarea
          value={cellValue}
          onInput={handleInput}
        ></StyledExpandedCellModal.Textarea>
      </Modal.Container>
    </Modal.Backdrop>,
    document.querySelector('#modal-portal')
  );
}
