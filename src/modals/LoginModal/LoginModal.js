import React from 'react';
import { LanguageContext } from '../../App';
import { Modal } from '../Modal.styles';

export function LoginModal() {
  const language = React.useContext(LanguageContext);

  return (
    <Modal.Backdrop>
      <Modal.Container>
        {/* @todo @dryup Make the Close button a component to be reused, instead of rebuilt */}
        <Modal.CloseButton
          aria-label={language['closeModal']}
          onClick={() => {
            dispatch(setModal({}));
          }}
        >
          <Modal.CloseIcon />
        </Modal.CloseButton>
        Hello, there!
      </Modal.Container>
    </Modal.Backdrop>
  );
}
