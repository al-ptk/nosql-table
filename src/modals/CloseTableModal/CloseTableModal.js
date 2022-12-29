import { Modal } from '../Modal.styles';
import { useDispatch } from 'react-redux';
import { setModal } from '../../redux/slices/uiKnobsSlice';
import { closeTable } from '../../redux/slices/tableSlice';
import { createPortal } from 'react-dom';

export function CloseTable() {
  const dispatch = useDispatch();

  return createPortal(
    <Modal.Backdrop>
      <Modal.Container>
        <Modal.Title>Close table?</Modal.Title>
        <Modal.ButtonHolder>
          <Modal.Button
            onClick={() => {
              dispatch(closeTable());
              dispatch(setModal({}));
            }}
          >
            Confirm
          </Modal.Button>
          <Modal.Button
            onClick={() => {
              dispatch(setModal({}));
            }}
          >
            Cancel
          </Modal.Button>
        </Modal.ButtonHolder>
      </Modal.Container>
    </Modal.Backdrop>,
    document.getElementById('modal-portal')
  );
}
