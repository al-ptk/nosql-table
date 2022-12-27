import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { togglePreview } from '../../redux/slices/uiKnobsSlice';
import { StyledJSONPreview } from './JSONPreview.styles';

export function JSONPreview() {
  const instances = useSelector((state) => state.table.instances);
  const showPreview = useSelector((state) => state.uiKnobs.showPreview);
  const dispatch = useDispatch();

  return showPreview ? (
    <StyledJSONPreview.Backdrop>
      <StyledJSONPreview.Container>
        <StyledJSONPreview.CloseButton
          onClick={() => dispatch(togglePreview())}
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
