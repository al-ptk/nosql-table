import { StyledFooter } from './components/StyledFooter';
import { useContext } from 'react';
import { LanguageContext } from './App';
import TwitterIcon from './assets/svgs/TwitterIcon';

export const Footer = () => {
  const language = useContext(LanguageContext);
  return (
    <StyledFooter>
      {language['madeBy']}{' '}
      <a href="https://github.com/al-ptk" target={'_blank'} rel="noreferrer">
        Alan Patrick
      </a>
      <a href="https://twitter.com/alptk_dev">
        <TwitterIcon
          style={{ fill: 'white', width: '1.5em', marginLeft: 10 }}
        />
      </a>
    </StyledFooter>
  );
};
