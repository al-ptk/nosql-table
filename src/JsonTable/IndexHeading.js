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

  return (
    <div>
      <ContextMenu
        {...{ xPos, yPos, Reference }}
        onBlur={() => {
          const isFocusWithin = Reference.current.contains(
            document.activeElement
          );
          if (!isFocusWithin) {
            updateShowContextMenu();
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
          closeContextMenu={updateShowContextMenu}
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
          closeContextMenu={updateShowContextMenu}
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
          closeContextMenu={updateShowContextMenu}
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
          closeContextMenu={updateShowContextMenu}
        />
        <ContextMenuButton
          buttonText={'Delete'}
          buttonAction={() => dispatch(deleteInstance(instanceIndex))}
          closeContextMenu={updateShowContextMenu}
        />
        <ContextMenuButton
          buttonText={'Cut'}
          buttonAction={() => dispatch(cutInstance(instanceIndex))}
          closeContextMenu={updateShowContextMenu}
        />
        <ContextMenuButton
          buttonText={'Copy'}
          buttonAction={() => dispatch(copyInstance(instanceIndex))}
          closeContextMenu={updateShowContextMenu}
        />
        <ContextMenuButton
          buttonText={'Duplicate'}
          buttonAction={() => dispatch(duplicateInstance(instanceIndex))}
          closeContextMenu={updateShowContextMenu}
        />
        <ContextMenuButton
          buttonText={'Paste Before'}
          buttonAction={() => dispatch(pasteInstance(instanceIndex))}
          closeContextMenu={updateShowContextMenu}
        />
        <ContextMenuButton
          buttonText={'Paste After'}
          buttonAction={() => dispatch(pasteInstance(instanceIndex + 1))}
          closeContextMenu={updateShowContextMenu}
        />
      </ContextMenu>
    </div>
  );
};
