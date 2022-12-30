import { useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { repeatForAll } from '../../redux/slices/tableSlice';
import { createPortal } from 'react-dom';
import { setModal } from '../../redux/slices/uiKnobsSlice';
import { Modal } from '../Modal.styles';
import { LanguageContext } from '../../App';

export const MassInsertInput = ({ propertyIndex }) => {
  const language = useContext(LanguageContext);
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
        <Modal.CloseButton
          onClick={closeParent}
          aria-label={language['closeModal']}
        >
          <Modal.CloseIcon />
        </Modal.CloseButton>
        <Modal.Title style={{ margin: '-40px 0 30px 0' }}>
          {language['insertFor']}{' '}
          <span style={{ fontWeight: 'bold' }}>{propertyName}</span>
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
            {language['insertValues']}
          </Modal.Button>
          <Modal.Button
            onClick={(e) => {
              closeParent(e);
            }}
          >
            {language['cancel']}
          </Modal.Button>
        </Modal.ButtonHolder>
      </Modal.Container>
    </Modal.Backdrop>,
    document.querySelector('#modal-portal')
  );
};
