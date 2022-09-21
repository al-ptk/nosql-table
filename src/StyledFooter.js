import styled from 'styled-components';

export const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 1.5em;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;

  background-color: hsl(215, 70%, 25%);
  color: white;
  border-radius: 5px 5px 0 0;

  a {
    color: white;
    text-decoration: none;
  }
`;
