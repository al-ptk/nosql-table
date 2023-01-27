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
  const selected = useSelector((state) => state.table.selected);

  const handleClick = () => {
    dispatch(setSelected({ type: 'instance', index: instanceIndex }));
    setDeleteButton(
      <DeleteEntityButton
        onClick={() => dispatch(deleteInstance({ instanceIndex }))}
      >
        {/* @todo Add X icon */}X
      </DeleteEntityButton>
    );
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
          setDeleteButton(null);
        }}
      />
    );
  };

  // @dryup @deleteHeading
  const handleMouseOver = (e) => {
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
      onMouseLeave={() => {
        if (
          !(selected.type === 'instance' && selected.index === instanceIndex)
        ) {
          setDeleteButton(null);
        }
      }}
    >
      {deleteButton}
      {instanceIndex}
      {contextMenu}
    </StyledIndexHeading.Container>
  );
}
