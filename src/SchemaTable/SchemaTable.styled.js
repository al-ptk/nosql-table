import styled from 'styled-components';
import JsonFormatter from 'react-json-formatter';

export const StyledMain = styled.main`
  width: fit-content;
  margin: 10vh auto;

  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const StyledTable = styled.table`
  background-color: white;

  border-collapse: collapse;

  td,
  th {
    border: 1px solid rgba(0, 0, 0, 0.5);
  }
`;

export const StyledJsonFormatter = styled(JsonFormatter)``;
