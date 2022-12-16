import { useState } from 'react';
import DropDownMenu from '../DropDownMenu';
import { useDispatch } from 'react-redux';

export default function IndexHeading({ instanceIndex }) {
  const [showContextMenu, setShowContextMenu] = useState(false);
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
        <IndexHeadingMenu
          xPos={showContextMenu[0]}
          yPos={showContextMenu[1]}
          instanceIndex={instanceIndex}
          updateShowContextMenu={() => {
            setShowContextMenu(false);
          }}
        />
      )}
    </th>
  );
}

const IndexHeadingMenu = ({
  instanceIndex,
  updateShowContextMenu,
  xPos,
  yPos,
}) => {
  return (
    <DropDownMenu
      {...{ xPos, yPos }}
      blurHandler={() => updateShowContextMenu()}
    >
      <p>
        <button
          onClick={() => swapRow(rowIndex, rowIndex - 1)}
          aria-label="Move row up"
        >
          Move row backward
        </button>
      </p>
      <p>
        <button
          onClick={() => swapRow(rowIndex, rowIndex * 1 + 1)}
          aria-label="Move row down"
        >
          Move row forward
        </button>
      </p>
      <p>
        <button onClick={() => deleteRow(rowIndex * 1)} aria-label="Delete row">
          Delete row
        </button>
      </p>
      <p>
        <button onClick={() => cutRow(rowIndex)}>Cut row</button>
      </p>
      <p>
        <button onClick={() => copyRow(rowIndex)}>Copy row</button>
      </p>
      <p>
        <button onClick={() => duplicateRow(rowIndex)}>Duplicate row</button>
      </p>
      <p>
        <button onClick={() => pasteRow(rowIndex)}>Paste row above</button>
      </p>
      <p>
        <button onClick={() => pasteRow(rowIndex * 1 + 1)}>
          Paste row below
        </button>
      </p>
    </DropDownMenu>
  );
};
