import { useRef, useState } from 'react';
import { ContextMenu, ContextMenuButton } from '../components/ContextMenu';

export const EditMenuAchonr = () => {
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
            <EditDropdown
              {...{ xPos, yPos, Reference }}
              closeMenu={() => setDropdown(null)}
            />
          );
        }}
      >
        Edit
      </button>
      {dropdown}
    </div>
  );
};

function EditDropdown({ xPos, yPos, Reference, closeMenu }) {
  return (
    <ContextMenu {...{ xPos, yPos, Reference, closeMenu }}>
      <ContextMenuButton
        buttonText={'Cut'}
        buttonAction={() => {}}
        closeMenu={closeMenu}
      />
      <ContextMenuButton
        buttonText={'Copy'}
        buttonAction={() => {}}
        closeMenu={closeMenu}
      />
      <ContextMenuButton
        buttonText={'Paste before'}
        buttonAction={() => {}}
        closeMenu={closeMenu}
      />
      <ContextMenuButton
        buttonText={'Paste After'}
        buttonAction={() => {}}
        closeMenu={closeMenu}
      />
      <ContextMenuButton
        buttonText={'Duplicate'}
        buttonAction={() => {}}
        closeMenu={closeMenu}
      />
    </ContextMenu>
  );
}
