import styled from 'styled-components';
import JsonFormatter from 'react-json-formatter';

export const StyledTable = styled.table`
  margin: 100px 10vw;
  max-width: 80vw;

  display: flex;

  background-color: white;
  border-collapse: collapse;

  td,
  th {
    position: relative;
    border: 1px solid rgba(0, 0, 0, 0.5);
    flex: 0;
    textarea {
      width: 150px;
      height: 50px;
    }
  }

  :focus,
  :focus-within {
    box-shadow: 0px 0px 8px rgba(255, 255, 255, 0.7);
  }
`;

export const StyledJsonFormatter = styled(JsonFormatter)``;

export const StyledTHead = styled.thead`
  tr {
    display: flex;
    flex-direction: column;
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

export const StyledTBody = styled.tbody`
  display: flex;
  overflow-x: scroll;

  tr {
    display: flex;
    flex-direction: column;
  }
`;

export const ContextualMenu = styled.div`
  position: absolute;
  top: ${(props) => props.yPos};
  left: ${(props) => props.xPos};
  z-index: 10;
  width: 200px;
  background-color: gray;

  button {
    display: block;
  }
`;
