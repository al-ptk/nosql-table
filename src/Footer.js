import { StyledFooter } from './components/StyledFooter';
import { useContext } from 'react';
import { LanguageContext } from './App';

export const Footer = () => {
  const language = useContext(LanguageContext);
  return (
    <StyledFooter>
      {language['madeBy']}{' '}
      <a href="https://github.com/al-ptk" target={'_blank'} rel="noreferrer">
        Alan Patrick
      </a>
    </StyledFooter>
  );
};
