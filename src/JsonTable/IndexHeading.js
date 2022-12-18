import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  addInstance,
  deleteInstance,
  swapInstances,
  copyInstance,
  cutInstance,
  pasteInstance,
  duplicateInstance,
} from '../app/slices/tableSlice';
import { ContextMenu, ContextMenuButton } from '../components/ContextMenu';

export default function IndexHeading({ instanceIndex }) {
  const [showContextMenu, setShowContextMenu] = useState(null);
  return (
    <th
      scope="row"
      onContextMenu={(e) => {
        e.preventDefault();
        setShowContextMenu([e.clientX, e.clientY]);
      }}
    >
      {instanceIndex}
      {showContextMenu && (
        <IndexHeadingContextMenu
          xPos={showContextMenu[0]}
          yPos={showContextMenu[1]}
          instanceIndex={instanceIndex}
          updateShowContextMenu={() => {
            setShowContextMenu(null);
          }}
        />
      )}
    </th>
  );
}

const IndexHeadingContextMenu = ({
  instanceIndex,
  updateShowContextMenu,
  xPos,
  yPos,
}) => {
  const dispatch = useDispatch();
  instanceIndex = parseInt(instanceIndex);

  const Reference = useRef(null);
  const closeContextMenu = () => {
    updateShowContextMenu();
  };

  return (
    <div>
      <ContextMenu
        {...{ xPos, yPos, Reference }}
        onBlur={() => {
          const isFocusWithin = Reference.current.contains(
            document.activeElement
          );
          if (!isFocusWithin) {
            closeContextMenu();
          }
          return;
        }}
      >
        <ContextMenuButton
          buttonText={'Move Before'}
          buttonAction={() =>
            dispatch(
              swapInstances({
                selectedIndex: instanceIndex,
                targetIndex: instanceIndex - 1,
              })
            )
          }
          closeContextMenu={closeContextMenu}
        />
        <ContextMenuButton
          buttonText={'Move After'}
          buttonAction={() =>
            dispatch(
              swapInstances({
                selectedIndex: instanceIndex,
                targetIndex: instanceIndex + 1,
              })
            )
          }
          closeContextMenu={closeContextMenu}
        />
        <ContextMenuButton
          buttonText={'Add Before'}
          buttonAction={() =>
            dispatch(
              addInstance({
                targetIndex: instanceIndex,
              })
            )
          }
          closeContextMenu={closeContextMenu}
        />
        <ContextMenuButton
          buttonText={'Add After'}
          buttonAction={() =>
            dispatch(
              addInstance({
                targetIndex: instanceIndex + 1,
              })
            )
          }
          closeContextMenu={closeContextMenu}
        />
        <ContextMenuButton
          buttonText={'Delete'}
          buttonAction={() => dispatch(deleteInstance(instanceIndex))}
          closeContextMenu={closeContextMenu}
        />
        <ContextMenuButton
          buttonText={'Cut'}
          buttonAction={() => dispatch(cutInstance(instanceIndex))}
          closeContextMenu={closeContextMenu}
        />
        <ContextMenuButton
          buttonText={'Copy'}
          buttonAction={() => dispatch(copyInstance(instanceIndex))}
          closeContextMenu={closeContextMenu}
        />
        <ContextMenuButton
          buttonText={'Duplicate'}
          buttonAction={() => dispatch(duplicateInstance(instanceIndex))}
          closeContextMenu={closeContextMenu}
        />
        <ContextMenuButton
          buttonText={'Paste Before'}
          buttonAction={() => dispatch(pasteInstance(instanceIndex))}
          closeContextMenu={closeContextMenu}
        />
        <ContextMenuButton
          buttonText={'Paste After'}
          buttonAction={() => dispatch(pasteInstance(instanceIndex + 1))}
          closeContextMenu={closeContextMenu}
        />
      </ContextMenu>
    </div>
  );
};
