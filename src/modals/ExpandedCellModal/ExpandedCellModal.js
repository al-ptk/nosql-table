import { createPortal } from 'react-dom';
import { useCellAccessor } from '../../JsonTable/DataCell/DataCell';
import { Modal } from '../Modal.styles';
import { StyledExpandedCellModal } from './ExpandedCellModal.styles';

export function ExpandedCellModal({ accessCoordinates }) {
  const [cellValue, handleInput] = useCellAccessor(accessCoordinates);
  return createPortal(
    <Modal.Backdrop>
      <Modal.Container>
        <Modal.CloseButton
          onClick={(e) => {
            e.target.parentNode.parentNode.remove();
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
