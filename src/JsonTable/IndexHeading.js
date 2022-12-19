import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSelected } from '../app/slices/tableSlice';
import { IndexHeadingContextMenu } from './IndexHeadingContextMenu';

export default function IndexHeading({ instanceIndex }) {
  const [contextMenu, setContextMenu] = useState(null);
  const dispatch = useDispatch();
  return (
    <th
      scope="row"
      onClick={() => {
        dispatch(setSelected({ type: 'instance', index: instanceIndex }));
      }}
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
