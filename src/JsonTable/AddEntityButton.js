import React from 'react';
import styled from 'styled-components';

export const AddEntityButton = ({ handleClick, ...props }) => {
  return (
    <td>
      <StyldEntityButton onClick={handleClick}>
        {props.children}
      </StyldEntityButton>
    </td>
  );
};

const StyldEntityButton = styled.td`
  position: absolute;
`;
