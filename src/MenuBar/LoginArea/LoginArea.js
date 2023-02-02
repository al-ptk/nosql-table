import React from 'react';
import { LanguageContext } from '../../App';
import { DropDownAnchor } from '../../components/DropDown.styles';
import { CSSOverride } from './LoginArea.styles';
import LoginModal from '../../modals/LoginModal';
import { useDispatch } from 'react-redux';
import { setModal } from '../../redux/slices/uiKnobsSlice';

export function LoginArea() {
  const language = React.useContext(LanguageContext);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setModal({ modal: <LoginModal /> }));
  };

  return (
    <DropDownAnchor.Button CSSOverride={CSSOverride} onClick={handleClick}>
      {language['loginMessage']}
    </DropDownAnchor.Button>
  );
}
