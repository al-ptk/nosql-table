import React from 'react';
import { StyledTHead } from './StyledTHead';
import { HeadingCell } from '../HeadingCell/HeadingCell';
import { useSelector, useDispatch } from 'react-redux';
import { addProperty } from '../../app/slices/tableSlice';

export function TableHead({ setIsVertical }) {
  const schema = useSelector((state) => state.table.schema);
  const selected = useSelector((state) => state.table.selected);

  const isHeadingHighlighted = (index) => {
    if (selected.type !== 'property') return null;
    const cellHighlighted = index === selected.index;
    return cellHighlighted ? 'highlight-selected' : null;
  };

  return (
    <StyledTHead>
      {/* For vertical rows, make tr be flex column */}
      <tr style={{ position: 'relative' }}>
        <RotateButton setIsVertical={setIsVertical} />
        {schema.map((property, propertyIndex) => (
          <HeadingCell
            key={`prop-${propertyIndex}`}
            propertyIndex={propertyIndex}
            className={isHeadingHighlighted(propertyIndex)}
          />
        ))}
        <AddPropertyButton />
      </tr>
    </StyledTHead>
  );
}

const RotateButton = ({ setIsVertical }) => {
  return (
    <th
      scope="col"
      className="index-heading"
      onContextMenu={(e) => e.preventDefault()}
    >
      <button
        onClick={() => setIsVertical((bool) => !bool)}
        style={{
          backgroundColor: 'transparent',
          border: 'none',
          height: '100%',
          width: '100%',
          color: 'white',
        }}
      >
        Rotate
      </button>
    </th>
  );
};

const AddPropertyButton = () => {
  const dispatch = useDispatch();

  return (
    <td>
      <button
        onClick={() => {
          dispatch(addProperty({}));
        }}
        style={{
          backgroundColor: '#373737',
          color: 'white',
          border: 'none',
          width: '100%',
          height: '100%',
        }}
      >
        Add Property
      </button>
    </td>
  );
};
