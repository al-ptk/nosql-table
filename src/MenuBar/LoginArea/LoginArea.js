import React from 'react';
import { LanguageContext } from '../../App';
import { DropDownAnchor } from '../../components/DropDown.styles';
import { CSSOverride } from './LoginArea.styles';

export function LoginArea() {
  const language = React.useContext(LanguageContext);

  return (
    <DropDownAnchor.Button CSSOverride={CSSOverride}>
      {language['loginMessage']}
    </DropDownAnchor.Button>
  );
}
