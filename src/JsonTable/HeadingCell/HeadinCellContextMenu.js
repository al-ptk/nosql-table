import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  addProperty,
  copyProperty,
  cutProperty,
  deleteProperty,
  pasteProperty,
  swapProperties,
  repeatForAll,
} from '../../redux/slices/tableSlice';
import { ContextMenu, ContextMenuButton } from '../../components/ContextMenu';
import { createPortal } from 'react-dom';

export const HeadinCellContextMenu = ({
  xPos,
  yPos,
  closeMenu,
  propertyIndex,
  setRepeatModal,
}) => {
  const dispatch = useDispatch();
  propertyIndex = parseInt(propertyIndex);

  const Reference = useRef(null);

  // ----------- Functions for each button of the menu --------
  const addBefore = () => {
    dispatch(addProperty({ propertyIndex }));
  };

  const addAfter = () => {
    dispatch(addProperty({ propertyIndex: propertyIndex + 1 }));
  };

  const moveBefore = () => {
    dispatch(
      swapProperties({
        selectedIndex: propertyIndex,
        targetIndex: propertyIndex - 1,
      })
    );
  };

  const moveAfter = () => {
    dispatch(
      swapProperties({
        selectedIndex: propertyIndex,
        targetIndex: propertyIndex + 1,
      })
    );
  };

  const selfDelete = () => {
    dispatch(deleteProperty({ propertyIndex }));
  };

  const copy = () => {
    dispatch(copyProperty({ propertyIndex }));
  };

  const cut = () => {
    dispatch(cutProperty({ propertyIndex }));
  };

  const pasteBefore = () => {
    // Array.slice is used for including elements mid array
    // so pasting in the same index pushes the old element foward
    dispatch(pasteProperty({ propertyIndex }));
  };

  const pasteAfter = () => {
    dispatch(pasteProperty({ propertyIndex: propertyIndex + 1 }));
  };

  return (
    <ContextMenu {...{ xPos, yPos, Reference }} closeMenu={closeMenu}>
      <ContextMenuButton
        closeMenu={closeMenu}
        buttonText={'Move back'}
        buttonAction={moveBefore}
      />
      <ContextMenuButton
        closeMenu={closeMenu}
        buttonText={'Move foward'}
        buttonAction={moveAfter}
      />
      <hr />
      <ContextMenuButton
        closeMenu={closeMenu}
        buttonText={'Cut'}
        buttonAction={cut}
      />
      <ContextMenuButton
        closeMenu={closeMenu}
        buttonText={'Copy'}
        buttonAction={copy}
      />
      <ContextMenuButton
        closeMenu={closeMenu}
        buttonText={'Paste Before'}
        buttonAction={pasteBefore}
      />
      <ContextMenuButton
        closeMenu={closeMenu}
        buttonText={'Paste After'}
        buttonAction={pasteAfter}
      />
      <ContextMenuButton
        closeMenu={closeMenu}
        buttonText={'Delete'}
        buttonAction={selfDelete}
      />
      <hr />
      <ContextMenuButton
        closeMenu={closeMenu}
        buttonText={'Add Before'}
        buttonAction={addBefore}
      />
      <ContextMenuButton
        closeMenu={closeMenu}
        buttonText={'Add After'}
        buttonAction={addAfter}
      />
      <ContextMenuButton
        buttonText={'Repeat For All'}
        closeMenu={closeMenu}
        buttonAction={() => {
          setRepeatModal(
            <RepetitionInsertModal {...{ propertyIndex, setRepeatModal }} />
          );
        }}
      />
    </ContextMenu>
  );
};

const RepetitionInsertModal = ({ propertyIndex, setRepeatModal }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const closeParent = (e) => {
    setRepeatModal(null);
  };

  return createPortal(
    <div
      style={{
        position: 'absolute',
        zIndex: 100,
        width: '400px',
        height: '400px',
        inset: '10vh 0 0 30vw',
        backgroundColor: 'rgba(0,0,0,.7)',
        padding: 30,
      }}
    >
      <textarea value={text} onInput={(e) => setText(e.target.value)} />
      <p>
        <button
          onClick={(e) => {
            dispatch(repeatForAll({ propertyIndex, newValue: text }));
            closeParent(e);
          }}
        >
          Repeat Values!
        </button>
        <button
          onClick={(e) => {
            closeParent(e);
          }}
        >
          Cancel!
        </button>
      </p>
    </div>,
    document.querySelector('#modal-portal')
  );
};
