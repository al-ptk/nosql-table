import { useContext, useRef, useState } from 'react';
import { LanguageContext } from '../../App';
import { DropDownAnchor } from '../../components/DropDown.styles';
import { FileDropDown } from './FileDropDown';

export const FileMenuAnchor = () => {
  const language = useContext(LanguageContext);
  const [dropdown, setDropdown] = useState(null);
  const buttonReference = useRef(null);

  const createMenu = () => {
    const coords = buttonReference.current.getBoundingClientRect();
    const xPos = coords.left;
    const yPos = coords.bottom;
    setDropdown(
      <FileDropDown {...{ xPos, yPos }} closeMenu={() => setDropdown(null)} />
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
        {language['file']}
      </DropDownAnchor.Button>
      {dropdown}
    </DropDownAnchor.Container>
  );
};
