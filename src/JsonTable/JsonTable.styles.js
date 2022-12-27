import styled, { css } from 'styled-components';

// Layout organization for horizontal mode
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

// Layout organization for vertical mode
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

export const StyledTable = styled.table`
  // Pick layout mode
  ${(props) => (props.isVertical ? verticalRows : horizontalRows)}
  /* margin: 100px auto;
  width: fit-content; */
  max-width: 90vw;

  background-color: transparent;
  border-collapse: collapse;

  tr {
    width: fit-content;
    height: fit-content;
    overflow: clip;
  }
`;
