import styled, { css } from 'styled-components';
import JsonFormatter from 'react-json-formatter';

const horizontalRows = css`
  display: flex;
  flex-direction: column;

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
    overflow-x: hidden;
    overflow-y: scroll;

    tr {
      display: flex;
    }
  }

  .index-heading {
    width: 100px;
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

  background-color: white;
  border-collapse: collapse;

  td,
  th {
    position: relative;
    border: 1px solid rgba(0, 0, 0, 0.5);
    flex: 0;
    textarea {
      max-width: 150px;
      height: 50px;
    }
  }

  :focus,
  :focus-within {
    box-shadow: 0px 0px 8px rgba(255, 255, 255, 0.7);
  }
`;

export const StyledTHead = styled.thead`
  tr {
    background-color: #373737;
  }

  th {
    textarea {
      color: white;
      background-color: inherit;
      border: none;
    }
  }
`;

export const StyledTBody = styled.tbody``;

export const StyledJsonFormatter = styled(JsonFormatter)``;
