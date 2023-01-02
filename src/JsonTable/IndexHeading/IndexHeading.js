import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DeleteEntityButton from '../../components/DeleteEntityButton';
import { setSelected, deleteInstance } from '../../redux/slices/tableSlice';
import { IndexHeadingContextMenu } from './IndexHeading.ContextMenu';
import { StyledIndexHeading } from './IndexHeading.styles';

export default function IndexHeading({ instanceIndex, className }) {
  const isVertical = useSelector((state) => state.uiKnobs.isVertical);
  const [contextMenu, setContextMenu] = useState(null);
  const [deleteButton, setDeleteButton] = useState(null);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setSelected({ type: 'instance', index: instanceIndex }));
  };

  const handleContextMenu = (e) => {
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
  };

  const handleMouseOver = () => {
    setDeleteButton(
      <DeleteEntityButton
        onClick={() => dispatch(deleteInstance({ instanceIndex }))}
      >
        {/* @todo Add X icon */}X
      </DeleteEntityButton>
    );
  };

  return (
    <StyledIndexHeading.Container
      isVertical={isVertical}
      className={className}
      tabIndex={-1}
      scope="row"
      onClick={handleClick}
      onContextMenu={handleContextMenu}
      onMouseOver={handleMouseOver}
      onMouseLeave={() => setDeleteButton(null)}
    >
      {deleteButton}
      {instanceIndex}
      {contextMenu}
    </StyledIndexHeading.Container>
  );
}
