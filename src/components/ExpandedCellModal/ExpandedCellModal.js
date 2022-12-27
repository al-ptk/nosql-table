import { createPortal } from 'react-dom';
import { useCellAccessor } from '../../JsonTable/DataCell/DataCell';
import { StyledExpandedCellModal } from './ExpandedCellModal.styles';

export function ExpandedCellModal({ accessCoordinates }) {
  const [cellValue, handleInput] = useCellAccessor(accessCoordinates);
  return createPortal(
    <StyledExpandedCellModal.Container>
      <StyledExpandedCellModal.CloseButton
        onClick={(e) => {
          e.target.parentNode.remove();
        }}
      >
        X
      </StyledExpandedCellModal.CloseButton>
      <StyledExpandedCellModal.Textarea
        value={cellValue}
        onInput={handleInput}
      ></StyledExpandedCellModal.Textarea>
    </StyledExpandedCellModal.Container>,
    document.querySelector('#modal-portal')
  );
}
