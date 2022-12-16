import React from 'react';
import { StyledJsonFormatter } from './JsonTable.styled';
import { useSelector } from 'react-redux';

function JSONPreview({ showPreview }) {
  const instances = useSelector((state) => state.table.instances);
  return showPreview ? (
    <p
      style={{
        backgroundColor: 'white',
        width: 400,
        margin: '0 auto',
        padding: 10,
      }}
    >
      <StyledJsonFormatter json={JSON.stringify(instances)} tabWith={4} />
    </p>
  ) : null;
}
