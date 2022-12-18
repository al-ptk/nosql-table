import { useRef, useState } from 'react';
import DropDownMenu from '../DropDownMenu';

export default function ActionBarButton({ name, children }) {
  const [contextMenu, setContextMenu] = useState(null);
  const menuRef = useRef(null);

  return (
    <div>
      <button
        onClick={(e) =>
          setContextMenu(
            <ActionBarDropDown menuRef={menuRef}>{children}</ActionBarDropDown>
          )
        }
      >
        {name}
      </button>
      {contextMenu}
    </div>
  );
}

function ActionBarDropDown({ xPos, yPos, menuRef, children }) {
  return (
    <DropDownMenu {...{ xPos, yPos, menuRef }}>{children}</DropDownMenu>
  );
}
