import React from 'react';
import { StyledTable, StyledTHead, StyledTBody } from './JsonTable.styled';
import { HeadingCell } from './HeadingCell';
import { DataCell } from './DataCell';
import { useSelector } from 'react-redux';
import IndexHeading from './IndexHeading';

export function JsonTable() {
  return (
    <StyledTable tabIndex="0">
      <TableHead />
      <TableBody />
    </StyledTable>
  );
}

function TableHead() {
  const schema = useSelector((state) => state.table.schema);

  return (
    <StyledTHead>
      {/* For vertical rows, make tr be flex column */}
      <tr>
        <th scope="col">&nbsp;</th>
        {schema.map((property, propertyIndex) => (
          <HeadingCell
            key={`prop-${propertyIndex}`}
            propertyIndex={propertyIndex}
          />
        ))}
      </tr>
    </StyledTHead>
  );
}

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
    </StyledTBody>
  );
}
