import { useRef } from 'react';
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

export const IndexHeadingContextMenu = ({
  instanceIndex,
  closeMenu,
  xPos,
  yPos,
}) => {
  const dispatch = useDispatch();
  instanceIndex = parseInt(instanceIndex);

  const Reference = useRef(null);

  return (
    <div>
      <ContextMenu {...{ xPos, yPos, Reference }} closeMenu={closeMenu}>
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
          closeMenu={closeMenu}
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
          closeMenu={closeMenu}
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
          closeMenu={closeMenu}
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
          closeMenu={closeMenu}
        />
        <ContextMenuButton
          buttonText={'Delete'}
          buttonAction={() => dispatch(deleteInstance(instanceIndex))}
          closeMenu={closeMenu}
        />
        <ContextMenuButton
          buttonText={'Cut'}
          buttonAction={() => dispatch(cutInstance(instanceIndex))}
          closeMenu={closeMenu}
        />
        <ContextMenuButton
          buttonText={'Copy'}
          buttonAction={() => dispatch(copyInstance(instanceIndex))}
          closeMenu={closeMenu}
        />
        <ContextMenuButton
          buttonText={'Duplicate'}
          buttonAction={() => dispatch(duplicateInstance(instanceIndex))}
          closeMenu={closeMenu}
        />
        <ContextMenuButton
          buttonText={'Paste Before'}
          buttonAction={() => dispatch(pasteInstance(instanceIndex))}
          closeMenu={closeMenu}
        />
        <ContextMenuButton
          buttonText={'Paste After'}
          buttonAction={() => dispatch(pasteInstance(instanceIndex + 1))}
          closeMenu={closeMenu}
        />
      </ContextMenu>
    </div>
  );
};
