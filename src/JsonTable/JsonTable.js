import React from 'react';
import { StyledTable, StyledTHead, StyledTBody } from './JsonTable.styled';
import { HeadingCell } from './HeadingCell';
import { DataCell } from './DataCell';
import { useSelector, useDispatch } from 'react-redux';
import IndexHeading from './IndexHeading';
import { addInstance, addProperty } from '../app/slices/tableSlice';

export function JsonTable({ isVertical, setIsVertical }) {
  return (
    <StyledTable tabIndex="0" isVertical={isVertical}>
      <TableHead setIsVertical={setIsVertical} />
      <TableBody />
    </StyledTable>
  );
}

function TableHead({ setIsVertical }) {
  const schema = useSelector((state) => state.table.schema);

  return (
    <StyledTHead>
      {/* For vertical rows, make tr be flex column */}
      <tr style={{ position: 'relative' }}>
        <RotateButton setIsVertical={setIsVertical} />
        {schema.map((property, propertyIndex) => (
          <HeadingCell
            key={`prop-${propertyIndex}`}
            propertyIndex={propertyIndex}
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

function TableBody() {
  const instances = useSelector((state) => state.table.instances);
  const schema = useSelector((state) => state.table.schema);
  const selected = useSelector((state) => state.table.selected);

  const isInstanceSelected = (instanceIndex) => {
    const cellHighlighted =
      selected.type === 'instance' && selected.index === instanceIndex;
    return cellHighlighted ? 'highlight-selected' : null;
  };

  return (
    <StyledTBody>
      {instances.map((instance, instanceIndex) => (
        <tr key={`instance-${instanceIndex}`}>
          <IndexHeading
            instanceIndex={instanceIndex}
            className={isInstanceSelected(instanceIndex)}
          />
          {schema.map((property, propertyIndex) => {
            return (
              <DataCell
                key={`cell-${instanceIndex}-${propertyIndex}`}
                accessCoordinates={{
                  instanceIndex,
                  propertyIndex,
                }}
                className={isInstanceSelected(instanceIndex)}
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
