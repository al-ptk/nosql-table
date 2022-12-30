import { useContext, useState } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useCellAccessor } from '../../JsonTable/DataCell/DataCell';
import { Modal } from '../Modal.styles';
import { setModal } from '../../redux/slices/uiKnobsSlice';
import { LanguageContext } from '../../App';

export function ExpandedCellModal({ accessCoordinates }) {
  const language = useContext(LanguageContext);
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
          aria-label={language['closeModal']}
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
          placeholder={language['placeholderText']}
        />
        <Modal.ButtonHolder>
          <Modal.Button
            onClick={() => {
              confirmChange();
            }}
          >
            {language['confirm']}
          </Modal.Button>
          <Modal.Button
            onClick={(e) => {
              dispatch(setModal({}));
            }}
          >
            {language['cancel']}
          </Modal.Button>
        </Modal.ButtonHolder>
      </Modal.Container>
    </Modal.Backdrop>,
    document.querySelector('#modal-portal')
  );
}
