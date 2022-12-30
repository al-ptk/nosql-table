import { useContext, useRef, useState } from 'react';
import { LanguageContext } from '../../App';
import { DropDownAnchor } from '../../components/DropDown.styles';
import { InsertDropdown } from './InsertDropdown';

export const InsertMenuAnchor = () => {
  const language = useContext(LanguageContext);
  const [dropdown, setDropdown] = useState(null);
  const buttonReference = useRef(null);

  const createMenu = () => {
    const coords = buttonReference.current.getBoundingClientRect();
    const xPos = coords.left;
    const yPos = coords.bottom;
    setDropdown(
      <InsertDropdown {...{ xPos, yPos }} closeMenu={() => setDropdown(null)} />
    );
  };

  return (
    <DropDownAnchor.Container
      onMouseOver={createMenu}
      onMouseLeave={() => {
        setDropdown(null);
      }}
    >
      <DropDownAnchor.Button ref={buttonReference}>
        {language['insert']}
      </DropDownAnchor.Button>
      {dropdown}
    </DropDownAnchor.Container>
  );
};
