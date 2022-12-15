import styled from 'styled-components';

export const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: fit-content;
  padding: 6px 0px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  background-color: #373737;
  color: white;

  a {
    color: white;
    text-decoration: none;
  }
`;
