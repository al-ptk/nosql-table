import styled, { css } from 'styled-components';

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
  ${(props) => (props.isVertical ? verticalRows : horizontalRows)}
  margin: 100px 10vw;
  max-width: 80vw;
  width: fit-content;

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
    }
  }

  th {
    background-color: #373737;
    color: white;
    textarea {
      color: white;
      background-color: inherit;
      border: none;
    }
  }

  :focus,
  :focus-within {
    box-shadow: 0px 0px 8px rgba(255, 255, 255, 0.7);
  }
`;

export const StyledTHead = styled.thead``;

export const StyledTBody = styled.tbody`
  textarea {
    background-color: white;
    color: black;
  }
`;
