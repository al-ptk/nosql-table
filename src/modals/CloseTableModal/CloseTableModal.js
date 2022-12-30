import { Modal } from '../Modal.styles';
import { useDispatch } from 'react-redux';
import { setModal } from '../../redux/slices/uiKnobsSlice';
import { closeTable } from '../../redux/slices/tableSlice';
import { createPortal } from 'react-dom';
import { useContext } from 'react';
import { LanguageContext } from '../../App';

export function CloseTable() {
  const language = useContext(LanguageContext);
  const dispatch = useDispatch();

  return createPortal(
    <Modal.Backdrop>
      <Modal.Container>
        <Modal.Title>{language['closeTable']}?</Modal.Title>
        <Modal.ButtonHolder>
          <Modal.Button
            onClick={() => {
              dispatch(closeTable());
              dispatch(setModal({}));
            }}
          >
            {language['confirm']}
          </Modal.Button>
          <Modal.Button
            onClick={() => {
              dispatch(setModal({}));
            }}
          >
            {language['cancel']}
          </Modal.Button>
        </Modal.ButtonHolder>
      </Modal.Container>
    </Modal.Backdrop>,
    document.getElementById('modal-portal')
  );
}
