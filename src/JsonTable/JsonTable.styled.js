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
  margin: 100px auto;
  width: fit-content;
  max-width: 90vw;

  background-color: transparent;
  border-collapse: collapse;

  tr {
    width: fit-content;
    height: fit-content;
    overflow: clip;
  }

  td,
  th {
    width: 150px;
    height: 50px;
    position: relative;
    border: 1px solid rgba(0, 0, 0, 0.5);
    textarea {
      width: 100%;
      height: 100%;
      border: none;

      &:focus {
        border: 2px solid black;
      }
    }
  }

  th {
    background-color: #373737;
    color: white;
    display: grid;
    place-items: center;
    textarea {
      color: white;
      background-color: inherit;
      border: none;
      width: 90%;
      height: fit-content;
      border-bottom: 1px solid rgba(255, 255, 255, 0.3);
      padding-bottom: 3px;

      &:focus {
        outline: none;
        border: 1px solid rgba(255, 255, 255, 0.7);
        box-shadow: 0px 0px 8px rgba(255, 255, 255, 0.3);
      }
    }
  }
`;
