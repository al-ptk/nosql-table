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
  const schema = useSelector((state) => state.schema);

  return (
    <StyledTHead>
      {/* For vertical rows, make tr be flex column */}
      <tr>
        <th scope="col">Index</th>
        {schema.map((property, propertyIndex) => (
          <HeadingCell
            key={`prop-${property.name}`}
            onContextMenu={(e) => {
              e.preventDefault();
              console.log('IMPLEMENT CONTEXT MENUS!');
            }}
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
        // For vertical rows, make tr be flex column
        <tr key={`instance-${instanceIndex}`}>
          <IndexHeading instanceIndex={instanceIndex} />
          {schema.map((property, propertyIndex) => {
            return <DataCell key={`cell-${instanceIndex}-${propertyIndex}`} />;
          })}
        </tr>
      ))}
    </StyledTBody>
  );
}
