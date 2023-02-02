import styled from 'styled-components';
import { Modal } from '../Modal.styles';

export const PickerButtonsHolder = styled.div`
  display: flex;
  justify-content: center;
  gap: 7.5%;
  width: 100%;
  border-bottom: 1px solid;
`;

export const FormPickerButton = styled(Modal.Button)`
  border-bottom: none;
  border-radius: 5px 5px 0px 0px;

  .selected {
    background-color: white;
    color: #373737;
  }
`;
