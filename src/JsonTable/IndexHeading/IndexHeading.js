import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DeleteEntityButton from '../../components/DeleteEntityButton';
import { setSelected, deleteInstance } from '../../redux/slices/tableSlice';
import { IndexHeadingContextMenu } from './IndexHeading.ContextMenu';
import { StyledIndexHeading } from './IndexHeading.styles';

export default function IndexHeading({ instanceIndex, className }) {
  const isVertical = useSelector((state) => state.uiKnobs.isVertical);
  const [contextMenu, setContextMenu] = useState(null);
  const dispatch = useDispatch();

  return (
    <StyledIndexHeading.Container
      isVertical={isVertical}
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
      <DeleteEntityButton
        onClick={() => dispatch(deleteInstance({ instanceIndex }))}
      >
        {/* @todo Add X icon */}X
      </DeleteEntityButton>
      {contextMenu}
    </StyledIndexHeading.Container>
  );
}
