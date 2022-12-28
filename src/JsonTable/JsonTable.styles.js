import styled, { css } from 'styled-components';
import CirclePlusIcon from '../assets/svgs/CirclePlusIcon';

export const StyledTable = {
  Container: styled.div`
    margin: 100px auto;
    width: fit-content;
    max-width: 80vw;
    position: relative;
  `,

  Table: styled.table`
    // Pick layout mode
    ${(props) => (props.isVertical ? verticalRows : horizontalRows)}
    max-width: 90vw;
    background-color: transparent;
    border-collapse: collapse;
    border-radius: 15px 0 0 0;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.7);

    tr {
      width: fit-content;
      height: fit-content;
      overflow: clip;
    }
  `,

  AddEntityButton: styled.button`
    ${(props) => (props.isVerticalButton ? verticalButton : horizontalButton)}

    position: absolute;
    padding: 5px;
    border: none;
    background-color: rgba(0, 0, 0, 0.5);
    color: rgba(255, 255, 255, 0.5);
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.7);
  `,
  AddEntityIcon: styled(CirclePlusIcon)`
    width: 30px;
  `,
};

// Layout Orientation

// for horizontal mode
const horizontalRows = css`
  display: flex;
  flex-direction: column;
  overflow: auto;
  thead {
    tr {
      flex: 1;
      display: flex;
      flex-wrap: nowrap;
    }
  }
  tbody {
    display: flex;
    flex-direction: column;
    tr {
      display: flex;
    }
  }
`;

// for vertical mode
const verticalRows = css`
  display: flex;
  thead {
    tr {
      display: flex;
      flex-direction: column;
    }
  }
  tbody {
    display: flex;
    overflow: auto;
    tr {
      display: flex;
      flex-direction: column;
    }
  }
`;

// AddEntityButton orientation

// for vertical mode
const verticalButton = css`
  top: 100%;
  left: 0px;
  width: 100%;
  height: fit-content;
  border-radius: 0px 0px 15px 15px;
`;

// for horizontal mode
const horizontalButton = css`
  top: 0px;
  left: 100%;
  width: fit-content;
  height: 100%;
  border-radius: 0px 15px 15px 0px;
`;
