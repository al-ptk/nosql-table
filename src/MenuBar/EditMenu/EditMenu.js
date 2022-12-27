import { useRef, useState } from 'react';
import { DropDownAnchor } from '../../components/DropDown.styles';
import { EditDropdown } from './EditDropdown';

export const EditMenuAnchor = () => {
  const [dropdown, setDropdown] = useState(null);
  const Reference = useRef(null);
  const buttonReference = useRef(null);

  const createMenu = () => {
    const coords = buttonReference.current.getBoundingClientRect();
    const xPos = coords.left;
    const yPos = coords.bottom;
    setDropdown(
      <EditDropdown
        {...{ xPos, yPos, Reference }}
        closeMenu={() => setDropdown(null)}
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
      <DropDownAnchor.Button ref={buttonReference}>Edit</DropDownAnchor.Button>
      {dropdown}
    </DropDownAnchor.Container>
  );
};
