import React from 'react';
import { HeadingCell } from '../HeadingCell/HeadingCell';
import { useSelector } from 'react-redux';

export function TableHead({ setIsVertical, setModal }) {
  const schema = useSelector((state) => state.table.schema);
  const selected = useSelector((state) => state.table.selected);

  const isHeadingHighlighted = (index) => {
    if (selected.type !== 'property') return null;
    const cellHighlighted = index === selected.index;
    return cellHighlighted ? 'highlight-selected' : null;
  };

  return (
    <thead>
      {/* For vertical rows, make tr be flex column */}
      <tr style={{ position: 'relative' }}>
        <RotateButton setIsVertical={setIsVertical} />
        {schema.map((property, propertyIndex) => (
          <HeadingCell
            key={`prop-${propertyIndex}`}
            propertyIndex={propertyIndex}
            className={isHeadingHighlighted(propertyIndex)}
            setModal={setModal}
          />
        ))}
      </tr>
    </thead>
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
