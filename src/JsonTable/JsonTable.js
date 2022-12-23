import React from 'react';
import { StyledTable, StyledTHead, StyledTBody } from './JsonTable.styled';
import { HeadingCell } from './HeadingCell';
import { DataCell } from './DataCell';
import { useSelector } from 'react-redux';
import IndexHeading from './IndexHeading';
import { useDispatch } from 'react-redux';
import { addInstance, addProperty } from '../app/slices/tableSlice';

export function JsonTable({ isVertical, setIsVertical }) {
  return (
    <div>
      <StyledTable tabIndex="0" isVertical={isVertical}>
        <TableHead setIsVertical={setIsVertical} />
        <TableBody />
      </StyledTable>
    </div>
  );
}

function TableHead({ setIsVertical }) {
  const schema = useSelector((state) => state.table.schema);

  return (
    <StyledTHead>
      {/* For vertical rows, make tr be flex column */}
      <tr style={{ position: 'relative' }}>
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

  return (
    <StyledTBody>
      {instances.map((instance, instanceIndex) => (
        <tr key={`instance-${instanceIndex}`}>
          <IndexHeading instanceIndex={instanceIndex} />
          {schema.map((property, propertyIndex) => {
            return (
              <DataCell
                key={`cell-${instanceIndex}-${propertyIndex}`}
                accessCoordinates={{
                  instanceIndex,
                  propertyIndex,
                }}
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
