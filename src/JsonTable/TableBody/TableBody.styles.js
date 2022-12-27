import styled from 'styled-components';

export const StyledTBody = styled.tbody`

  tr:nth-child(2n + 1) * {
    background-color: #404040;
  }

  tr:nth-child(2n) * {
    background-color: #353535;
  }
`;
