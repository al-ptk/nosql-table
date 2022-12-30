import React from 'react';
import { StyledTBody } from './TableBody.styles';
import { DataCell } from '../DataCell/DataCell';
import { useSelector } from 'react-redux';
import IndexHeading from '../IndexHeading/IndexHeading';

export function TableBody() {
  const instances = useSelector((state) => state.table.instances);
  const schema = useSelector((state) => state.table.schema);
  const selected = useSelector((state) => state.table.selected);

  // @dryup @cellHighlight
  const isHeadingHighlighted = (index) => {
    if (selected.type !== 'instance') return null;
    const cellHighlighted = selected.index === index;
    return cellHighlighted ? 'highlight-selected' : null;
  };

  const isCellHighlighted = (instanceIndex, propertyIndex) => {
    const { type, index } = selected;
    let cellHighlighted =
      type === 'instance'
        ? instanceIndex === index
        : type === 'property'
        ? propertyIndex === index
        : null;
    return cellHighlighted ? 'highlight-selected' : null;
  };

  return (
    <StyledTBody>
      {instances.map((instance, instanceIndex) => (
        <tr key={`instance-${instanceIndex}`}>
          <IndexHeading
            instanceIndex={instanceIndex}
            className={'heading-cell ' + isHeadingHighlighted(instanceIndex)}
          />
          {schema.map((property, propertyIndex) => {
            return (
              <DataCell
                key={`cell-${instanceIndex}-${propertyIndex}`}
                accessCoordinates={{
                  instanceIndex,
                  propertyIndex,
                }}
                className={isCellHighlighted(instanceIndex, propertyIndex)}
              />
            );
          })}
        </tr>
      ))}
    </StyledTBody>
  );
}
