import { Modal } from '../Modal.styles';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { setModal } from '../../redux/slices/uiKnobsSlice';
import styled from 'styled-components';
import { useContext } from 'react';
import { LanguageContext } from '../../App';

export function CreditsModal() {
  const language = useContext(LanguageContext);
  const dispatch = useDispatch();

  return createPortal(
    <Modal.Backdrop>
      <Modal.Container>
        <Modal.CloseButton
          aria-label={language['closeModal']}
          onClick={() => {
            dispatch(setModal({}));
          }}
        >
          <Modal.CloseIcon />
        </Modal.CloseButton>
        <StyledP>
          {language['creditsFont']}{' '}
          <a
            target={'_blank'}
            href="https://fonts.google.com/noto/specimen/Noto+Sans?preview.text=File&preview.size=20&preview.text_type=custom&category=Sans+Serif,Monospace"
            rel="noreferrer"
          >
            Noto Sans
          </a>
        </StyledP>
        <StyledP>
          {language['githubIconBy']}{' '}
          <a
            target={'_blank'}
            href="https://icons8.com/icon/12599/github"
            rel="noreferrer"
          >
            icons8.com
          </a>
        </StyledP>
        <StyledP>
          {language['xCircleIconBy']}{' '}
          <a
            target={'_blank'}
            href="https://freeicons.io/navigation-set-arrows/cancel-circle-close-delete-icon-730#"
            rel="noreferrer"
          >
            icon king1
          </a>
        </StyledP>
        <StyledP>
          {language['plusCircleIconBy']}{' '}
          <a
            target={'_blank'}
            href="https://freeicons.io/business-and-online-icons/plus-circle-icon-icon#"
            rel="noreferrer"
          >
            Raj Dev
          </a>
        </StyledP>
        <StyledP>
          {language['rotateIconBy']}{' '}
          <a
            target={'_blank'}
            href="https://freeicons.io/creatype-essential-ui-v.1-outline/update-rotate-sync-user-interface-icon-45940#"
            rel="noreferrer"
          >
            ColourCreatype
          </a>
        </StyledP>
        <StyledP>
          {language['twitterIconBy']}{' '}
          <a
            target={'_blank'}
            href="https://freeicons.io/free-mobile-app-icons/twitter-icon-21486#"
            rel="noreferrer"
          >
            ColourCreatype
          </a>
        </StyledP>
      </Modal.Container>
    </Modal.Backdrop>,
    document.querySelector('#modal-portal')
  );
}

const StyledP = styled.p`
  color: white;
  font-weight: bold;

  a {
    color: white;
    font-weight: normal;
  }
`;
