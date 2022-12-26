import { useRef, useState } from 'react';
import { DropDownAnchor } from '../MenuBarStyledComponents';
import { ViewDropDown } from './ViewDropDown';

export function ViewMenuAnchor({ setIsVertical, setShowPreview }) {
  const [dropdown, setDropdown] = useState(null);
  const buttonReference = useRef(null);

  const createMenu = () => {
    const coords = buttonReference.current.getBoundingClientRect();
    const xPos = coords.left;
    const yPos = coords.bottom;
    setDropdown(
      <ViewDropDown
        {...{
          xPos,
          yPos,
          setIsVertical,
          setShowPreview,
        }}
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
      <DropDownAnchor.Button ref={buttonReference}>View</DropDownAnchor.Button>
      {dropdown}
    </DropDownAnchor.Container>
  );
}
