import React from 'react';
import { LanguageContext } from '../../App';
import { DropDownAnchor } from '../../components/DropDown.styles';
import { CSSOverride } from './LoginArea.styles';
import LoginModal from '../../modals/LoginModal';
import { useDispatch, useSelector } from 'react-redux';
import { setModal } from '../../redux/slices/uiKnobsSlice';
import AllProjects from '../../modals/AllProjectsModal';

export function LoginArea() {
  const language = React.useContext(LanguageContext);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.uiKnobs.user);
  console.log(user);

  const openLoginModal = () => {
    dispatch(setModal({ modal: <LoginModal /> }));
  };

  const openProjectsModal = () => {
    dispatch(setModal({ modal: <AllProjects /> }));
  };

  if (user) {
    return (
      <DropDownAnchor.Button
        CSSOverride={CSSOverride}
        onClick={openProjectsModal}
      >
        {`${language['greeting']}, ${user.name}`}
      </DropDownAnchor.Button>
    );
  }

  return (
    <DropDownAnchor.Button CSSOverride={CSSOverride} onClick={openLoginModal}>
      {language['loginMessage']}
    </DropDownAnchor.Button>
  );
}
