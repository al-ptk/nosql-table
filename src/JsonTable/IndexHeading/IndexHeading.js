import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSelected } from '../../redux/slices/tableSlice';
import { IndexHeadingContextMenu } from './IndexHeading.ContextMenu';
import { StyledIndexHeading } from './IndexHeading.styles';

export default function IndexHeading({ instanceIndex, className }) {
  const [contextMenu, setContextMenu] = useState(null);
  const dispatch = useDispatch();

  return (
    <StyledIndexHeading.Container
      className={className}
      tabIndex={-1}
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
    </StyledIndexHeading.Container>
  );
}
