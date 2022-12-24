import React from 'react';
import { StyledTBody } from './StyledTBody';
import { DataCell } from '../DataCell/DataCell';
import { useSelector, useDispatch } from 'react-redux';
import IndexHeading from '../IndexHeading/IndexHeading';
import { addInstance } from '../../redux/slices/tableSlice';

export function TableBody() {
  const instances = useSelector((state) => state.table.instances);
  const schema = useSelector((state) => state.table.schema);
  const selected = useSelector((state) => state.table.selected);

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
            className={isHeadingHighlighted(instanceIndex)}
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
      <AddInstanceButton />
    </StyledTBody>
  );
}

const AddInstanceButton = () => {
  const dispatch = useDispatch();

  return (
    <tr>
      <td>
        <button
          onClick={() => {
            dispatch(addInstance({}));
          }}
          style={{
            backgroundColor: '#373737',
            color: 'white',
            border: 'none',
            width: '100%',
            height: '100%',
          }}
        >
          Add Instance
        </button>
      </td>
    </tr>
  );
};
