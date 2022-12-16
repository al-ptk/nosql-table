import { useState } from 'react';
import DropDownMenu from '../DropDownMenu';
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
  const dispatch = useDispatch();
  instanceIndex = parseInt(instanceIndex);

  return (
    <DropDownMenu
      {...{ xPos, yPos }}
      blurHandler={() => updateShowContextMenu()}
    >
      <button
        onClick={() =>
          dispatch(
            addInstance({
              targetIndex: instanceIndex,
            })
          )
        }
      >
        Add Before
      </button>
      <button
        onClick={() =>
          dispatch(
            addInstance({
              targetIndex: instanceIndex + 1,
            })
          )
        }
      >
        Add After
      </button>
      <button
        onClick={() =>
          dispatch(
            swapInstances({
              selectedIndex: instanceIndex,
              targetIndex: instanceIndex - 1,
            })
          )
        }
        aria-label="Move row up"
      >
        Move row backward
      </button>
      <button
        onClick={() =>
          dispatch(
            swapInstances({
              selectedIndex: instanceIndex,
              targetIndex: instanceIndex - 1,
            })
          )
        }
        aria-label="Move row down"
      >
        Move row forward
      </button>
      <button
        onClick={() => dispatch(deleteInstance(instanceIndex * 1))}
        aria-label="Delete row"
      >
        Delete row
      </button>
      <button onClick={() => dispatch(cutInstance(instanceIndex))}>
        Cut row
      </button>
      <button onClick={() => dispatch(copyInstance(instanceIndex))}>
        Copy row
      </button>
      <button onClick={() => dispatch(duplicateInstance(instanceIndex))}>
        Duplicate row
      </button>
      <button onClick={() => dispatch(pasteInstance(instanceIndex))}>
        Paste row above
      </button>
      <button onClick={() => dispatch(pasteInstance(instanceIndex))}>
        Paste row below
      </button>
    </DropDownMenu>
  );
};
