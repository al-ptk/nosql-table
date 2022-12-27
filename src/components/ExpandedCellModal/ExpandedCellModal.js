import { createPortal } from 'react-dom';
import { useCellAccessor } from '../../JsonTable/DataCell/DataCell';

export function ExpandedCellModal({ accessCoordinates }) {
  const [cellValue, handleInput] = useCellAccessor(accessCoordinates);
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
      <button
        style={{ position: 'absolute', right: 20, top: 20 }}
        onClick={(e) => {
          e.target.parentNode.remove();
        }}
      >
        X
      </button>
      <textarea
        style={{ width: '100%', height: '100%' }}
        value={cellValue}
        onInput={handleInput}
      ></textarea>
    </div>,
    document.querySelector('#modal-portal')
  );
}
