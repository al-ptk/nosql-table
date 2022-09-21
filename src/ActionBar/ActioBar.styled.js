import styled from 'styled-components';

export const StyledActionBar = styled.header`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 1.5em;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;

  background-color: hsl(215, 70%, 25%);
  color: white;

  a {
    color: white;
    text-decoration: none;
  }
`;
