import { useState } from 'react';
import { IndexHeadingContextMenu } from './IndexHeadingContextMenu';

export default function IndexHeading({ instanceIndex }) {
  const [contextMenu, setContextMenu] = useState(null);
  return (
    <th
      scope="row"
      onContextMenu={(e) => {
        e.preventDefault();
        setContextMenu(
          <IndexHeadingContextMenu
            xPos={e.clientX}
            yPos={e.clientY}
            instanceIndex={instanceIndex}
            closeMenu={() => {
              setContextMenu(null);
            }}
          />
        );
      }}
    >
      {instanceIndex}
      {contextMenu}
    </th>
  );
}
