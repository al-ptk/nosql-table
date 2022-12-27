import React from 'react';
import { HeadingCell } from '../HeadingCell/HeadingCell';
import { useSelector } from 'react-redux';

import { RotateButton } from './RotateButton/RotateButton';
import { StyledTableHead } from './TableHead.styles';

export function TableHead() {
  const schema = useSelector((state) => state.table.schema);
  const selected = useSelector((state) => state.table.selected);

  const isHeadingHighlighted = (index) => {
    if (selected.type !== 'property') return null;
    const cellHighlighted = index === selected.index;
    return cellHighlighted ? 'highlight-selected' : null;
  };

  return (
    <StyledTableHead.Container>
      {/* For vertical rows, make tr be flex column */}
      <StyledTableHead.Row>
        <RotateButton />
        {schema.map((property, propertyIndex) => (
          <HeadingCell
            key={`prop-${propertyIndex}`}
            propertyIndex={propertyIndex}
            className={isHeadingHighlighted(propertyIndex)}
          />
        ))}
      </StyledTableHead.Row>
    </StyledTableHead.Container>
  );
}
