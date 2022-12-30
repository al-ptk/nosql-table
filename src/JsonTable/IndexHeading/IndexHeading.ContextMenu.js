import { useContext, useRef } from 'react';
import { useDispatch } from 'react-redux';
import {
  addInstance,
  deleteInstance,
  swapInstances,
  copyInstance,
  cutInstance,
  pasteInstance,
  duplicateInstance,
  replaceInstance,
} from '../../redux/slices/tableSlice';
import {
  ContextMenu,
  ContextMenuButton,
} from '../../components/ContextMenu/ContextMenu';
import { LanguageContext } from '../../App';

export const IndexHeadingContextMenu = ({
  instanceIndex,
  closeMenu,
  xPos,
  yPos,
}) => {
  const language = useContext(LanguageContext);
  const dispatch = useDispatch();
  instanceIndex = parseInt(instanceIndex);

  const Reference = useRef(null);

  return (
    <div>
      <ContextMenu {...{ xPos, yPos, Reference }} closeMenu={closeMenu}>
        <ContextMenuButton
          buttonText={language['moveBackwards']}
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
          buttonText={language['moveForwards']}
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
        <hr />
        {/* @todo coordinate the order of actions in all menus */}
        <ContextMenuButton
          buttonText={language['delete']}
          buttonAction={() => dispatch(deleteInstance({ instanceIndex }))}
          closeMenu={closeMenu}
        />
        <ContextMenuButton
          buttonText={language['cut']}
          buttonAction={() => dispatch(cutInstance({ instanceIndex }))}
          closeMenu={closeMenu}
        />
        <ContextMenuButton
          buttonText={language['copy']}
          buttonAction={() => dispatch(copyInstance({ instanceIndex }))}
          closeMenu={closeMenu}
        />
        <ContextMenuButton
          buttonText={language['duplicate']}
          buttonAction={() => dispatch(duplicateInstance({ instanceIndex }))}
          closeMenu={closeMenu}
        />
        <ContextMenuButton
          buttonText={language['pasteIn']}
          buttonAction={() => dispatch(replaceInstance({ instanceIndex }))}
          closeMenu={closeMenu}
        />
        <ContextMenuButton
          buttonText={language['pasteBefore']}
          buttonAction={() => dispatch(pasteInstance({ instanceIndex }))}
          closeMenu={closeMenu}
        />
        <ContextMenuButton
          buttonText={language['pasteAfter']}
          buttonAction={() =>
            dispatch(pasteInstance({ instanceIndex: instanceIndex + 1 }))
          }
          closeMenu={closeMenu}
        />
        <hr />
        <ContextMenuButton
          buttonText={language['addBefore']}
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
          buttonText={language['addAfter']}
          buttonAction={() =>
            dispatch(
              addInstance({
                targetIndex: instanceIndex + 1,
              })
            )
          }
          closeMenu={closeMenu}
        />
      </ContextMenu>
    </div>
  );
};
