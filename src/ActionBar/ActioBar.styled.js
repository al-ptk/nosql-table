import styled from 'styled-components';

export const StyledActionBar = styled.header`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 3em;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;

  background-color: hsl(215, 70%, 25%);
  color: white;
  border-radius: 0 0 10px 10px;

  button {
    padding: 5px;

    background-color: hsl(190, 88%, 42%);
    border: 1px solid rgba(255, 255, 255, 0.6);
    border-radius: 12px;

    color: white;
    font-weight: bold;
  }
`;
