import React from 'react';
import { useSelector } from 'react-redux';
import { StyledJSONPreview } from './JSONPreview.styles';

export function JSONPreview({ showPreview, setShowPreview }) {
  const instances = useSelector((state) => state.table.instances);
  return showPreview ? (
    <StyledJSONPreview.Backdrop>
      <StyledJSONPreview.Container>
        <StyledJSONPreview.CloseButton
          onClick={() => setShowPreview((bool) => !bool)}
        >
          X
        </StyledJSONPreview.CloseButton>
        <StyledJSONPreview.Formatter
          json={JSON.stringify(instances)}
          tabWith={4}
        />
      </StyledJSONPreview.Container>
    </StyledJSONPreview.Backdrop>
  ) : null;
}
