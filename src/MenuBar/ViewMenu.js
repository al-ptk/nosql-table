import { useRef, useState } from 'react';
import { ContextMenu, ContextMenuButton } from '../components/ContextMenu';
import { StyledAnchorContainer } from './MenuBar.styled';

export function ViewMenuAnchor({ setIsVertical, setShowPreview }) {
  const [dropdown, setDropdown] = useState(null);
  const Reference = useRef(null);
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
          Reference,
          setIsVertical,
          setShowPreview,
        }}
        closeMenu={() => setDropdown(null)}
      />
    );
  };

  return (
    <StyledAnchorContainer
      onMouseOver={createMenu}
      onMouseLeave={() => {
        setDropdown(null);
      }}
    >
      <button onClick={createMenu} ref={buttonReference}>
        View
      </button>
      {dropdown}
    </StyledAnchorContainer>
  );
}

const ViewDropDown = ({
  xPos,
  yPos,
  Reference,
  closeMenu,
  setIsVertical,
  setShowPreview,
}) => {
  return (
    <ContextMenu {...{ xPos, yPos, Reference, closeMenu }}>
      <ContextMenuButton
        buttonAction={() => setShowPreview((bool) => !bool)}
        buttonText={'Show preview'}
        closeMenu={closeMenu}
      />
      <ContextMenuButton
        buttonAction={() => setIsVertical((bool) => !bool)}
        buttonText={'Toggle orientation'}
        closeMenu={closeMenu}
      />
    </ContextMenu>
  );
};
