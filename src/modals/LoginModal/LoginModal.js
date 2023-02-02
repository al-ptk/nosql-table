import React from 'react';
import { useDispatch } from 'react-redux';
import { LanguageContext } from '../../App';
import { Modal } from '../Modal.styles';
import { setModal } from '../../redux/slices/uiKnobsSlice';
import { FormPickerButton, PickerButtonsHolder } from './LoginModal.styles';

export function LoginModal() {
  const language = React.useContext(LanguageContext);
  const dispatch = useDispatch();
  const [currentForm, setCurrentForm] = React.useState(null);

  // @todo :
  //    Make the current button invert colors
  //    Make the Sign In button start being selected
  //
  // Maybe use currentForm as a string and a effect to update the form outlet?
  // Maybe make a FormOutlet function that takes a string and returns a component?

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
        <PickerButtonsHolder>
          <FormPickerButton>{language['signIn']}</FormPickerButton>
          <FormPickerButton>{language['signUp']}</FormPickerButton>
        </PickerButtonsHolder>
        {currentForm}
      </Modal.Container>
    </Modal.Backdrop>
  );
}

function LoginForm() {
  const language = React.useContext(LanguageContext);

  return (
    <form>
      <label>
        Email:
        <input type="text" />
      </label>
      <label>
        {language['password'] + ':'}
        <input type="password" />
      </label>
      <button type="submit">{language['confirm']}</button>
    </form>
  );
}

function SignUpForm() {
  const language = React.useContext(LanguageContext);

  return (
    <form>
      <label>
        {language['name'] + ':'}
        <input type="text" />
      </label>
      <label>
        Email:
        <input type="text" />
      </label>
      <label>
        {language['password'] + ':'}
        <input type="password" />
      </label>
      <button type="submit">{language['confirm']}</button>
    </form>
  );
}
