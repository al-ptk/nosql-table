import { useContext, useRef, useState } from 'react';
import { DropDownAnchor } from '../../components/DropDown.styles';
import { EditDropdown } from './EditDropdown';
import { LanguageContext } from '../../App';

export const EditMenuAnchor = () => {
  const language = useContext(LanguageContext);
  const [dropdown, setDropdown] = useState(null);
  const buttonReference = useRef(null);

  const createMenu = () => {
    const coords = buttonReference.current.getBoundingClientRect();
    const xPos = coords.left;
    const yPos = coords.bottom;
    setDropdown(
      <EditDropdown
        {...{ xPos, yPos }}
        closeDropDown={() => setDropdown(null)}
      />
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
        {language['edit']}
      </DropDownAnchor.Button>
      {dropdown}
    </DropDownAnchor.Container>
  );
};
