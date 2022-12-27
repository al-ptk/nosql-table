import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { repeatForAll } from '../../redux/slices/tableSlice';
import { createPortal } from 'react-dom';
import { setModal } from '../../redux/slices/uiKnobsSlice';

export const RepeatedInsertInput = ({ propertyIndex }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const closeParent = (e) => {
    dispatch(setModal({}));
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
