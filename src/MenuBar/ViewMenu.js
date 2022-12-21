import { useRef, useState } from 'react';
import { ContextMenu, ContextMenuButton } from '../components/ContextMenu';

export function ViewMenuAnchor({ setIsVertical, setShowPreview, showPreview }) {
  const [dropdown, setDropdown] = useState(null);
  const Reference = useRef(null);

  return (
    <div>
      <button
        onClick={(e) => {
          const coords = e.target.getBoundingClientRect();
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
                showPreview,
              }}
              closeMenu={() => setDropdown(null)}
            />
          );
        }}
      >
        View
      </button>
      {dropdown}
    </div>
  );
}

const ViewDropDown = ({
  xPos,
  yPos,
  Reference,
  closeMenu,
  setIsVertical,
  setShowPreview,
  showPreview,
}) => {
  return (
    <ContextMenu {...{ xPos, yPos, Reference }}>
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
