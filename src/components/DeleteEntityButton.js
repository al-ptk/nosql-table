import styled from 'styled-components';

const DeleteEntityButton = styled.button`
  /* External layout */
  position: absolute;
  top: 2px;
  right: 0.5em;
  z-index: 100;
  width: 1.3em;
  height: 1.3em;

  /* Internal layout */
  font-size: 12px;
  padding: 0px 0px 1.1em 0px;

  /* Modifiers */
  border: none;
  background-color: rgba(137, 137, 137, 1);
  color: white;
  border-radius: 50%;
  font-weight: bold;
`;

export default DeleteEntityButton;
