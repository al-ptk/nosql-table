import styled from 'styled-components';

export const StyledMenuBar = styled.header`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 3em;
  z-index: 10;
  isolation: isolate;

  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 15px;
  padding: 0px 15px;

  background-color: #373737;
  color: white;

  a,
  button {
    padding: 5px;
    background-color: transparent;
    color: white;
    border: none;
    font-weight: bold;
    text-decoration: none;
  }

   > a,
   > div > button {
    font-size: 16px;
  }

  input[type='text'].title {
    width: 200px;
    margin: 0px 10px 3px 20px;
    padding: 0 1px;

    background-color: transparent;
    color: white;
    outline: none;
    border: none;
    border-bottom: 1px solid;

    font-size: 18px;
  }

  hr {
    color: rgba(255, 255, 255, 0.3);
    margin: 2px 0;
  }
`;
