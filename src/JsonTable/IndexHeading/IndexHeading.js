import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSelected } from '../../redux/slices/tableSlice';
import { IndexHeadingContextMenu } from './IndexHeadingContextMenu';

export default function IndexHeading({ instanceIndex, className }) {
  const [contextMenu, setContextMenu] = useState(null);
  const dispatch = useDispatch();

  return (
    <th
      className={className}
      tabIndex={-1}
      style={{
        cursor: 'default',
        position: 'sticky',
        left: 0,
        backgroundColor: '#373737',
        zIndex: 10,
      }}
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
