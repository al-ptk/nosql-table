import styled from 'styled-components';

export const StyledActionBar = styled.header`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 3em;

  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 15px;

  background-color: #373737;
  color: white;

  button {
    padding: 5px;
    background-color: transparent;
    color: white;
    border: none;
    font-weight: bold;
  }

  input[type='text'].title {
    width: 200px;
    margin-bottom: 2px;
    padding: 0 1px;

    background-color: transparent;
    color: white;
    outline: none;
    border: none;
    border-bottom: 1px solid;

    font-size: 18px;
  }
`;
