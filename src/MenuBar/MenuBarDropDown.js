import { useRef, useState } from 'react';
import DropDownMenu from '../components/DropDownMenu';

export default function MenuBarButton({ name, children }) {
  const [contextMenu, setContextMenu] = useState(null);
  const menuRef = useRef(null);

  return (
    <div>
      <button
        onClick={(e) =>
          setContextMenu(
            <MenuBarDropDown menuRef={menuRef}>{children}</MenuBarDropDown>
          )
        }
      >
        {name}
      </button>
      {contextMenu}
    </div>
  );
}

function MenuBarDropDown({ xPos, yPos, menuRef, children }) {
  return <DropDownMenu {...{ xPos, yPos, menuRef }}>{children}</DropDownMenu>;
}
