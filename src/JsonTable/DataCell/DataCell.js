import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyledDataCell } from './DataCell.styles';
import ExpandedCellModal from '../../modals/ExpandedCellModal';
import { setModal } from '../../redux/slices/uiKnobsSlice';
import Tooltip from '../../components/Tooltip';
import { language } from '../../locales/language';
import { useCellAccessor } from './useCellAccessor';

export const DataCell = ({ accessCoordinates, className }) => {
  const [cellValue, handleInput] = useCellAccessor(accessCoordinates);
  const isVertical = useSelector((state) => state.uiKnobs.isVertical);
  const dispatch = useDispatch();
  const [tooltip, setTooltip] = useState(null);

  const addTooltip = (e) => {
    if (tooltip) return;
    // if(tipHasBeenGiven('textarea-overflow')) return;

    const coords = e.target.parentNode.getBoundingClientRect();
    const elem = e.target;
    if (elem.clientHeight < elem.scrollHeight) {
      setTooltip(
        <Tooltip xPos={coords.left} yPos={coords.top - 24}>
          {language['tooltipExpandCell']}
        </Tooltip>
      );
    }
  };

  return (
    <StyledDataCell.Container
      className={className}
      isVertical={isVertical}
      onDoubleClick={() =>
        dispatch(
          setModal({ modal: <ExpandedCellModal {...{ accessCoordinates }} /> })
        )
      }
    >
      <StyledDataCell.Textarea
        value={cellValue || ''}
        onInput={handleInput}
        onMouseOver={addTooltip}
        onFocus={addTooltip}
        onMouseLeave={() => setTooltip(null)}
        onBlur={() => setTooltip(null)}
      />
      {tooltip}
    </StyledDataCell.Container>
  );
};
