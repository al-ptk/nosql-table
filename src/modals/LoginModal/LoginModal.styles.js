import styled from 'styled-components';
import { Modal } from '../Modal.styles';

export const FormPicker = {
  Container: styled.div`
    display: flex;
    justify-content: center;
    gap: 7.5%;
    width: 100%;
    border-bottom: 1px solid;
  `,
  Button: styled(Modal.Button)`
    border-bottom: none;
    border-radius: 5px 5px 0px 0px;

    &.selected {
      background-color: white;
      color: #373737;
    }
  `,
};

export const AuthForm = {
  Form: styled.form`
    background-color: rgba(30, 30, 30, 0.3);
    height: 60%;
    margin: 60px;
    padding: 30px 20px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    gap: 20px;
  `,
  Label: styled.label`
    display: block;
    font-size: 1em;
    font-weight: bold;
  `,
  Input: styled.input`
    background-color: rgba(30, 30, 30, 0.3);
    display: block;
    color: white;
    padding: 2.5px 5px;
    border: none;
    border-bottom: 1px solid;
    margin-top: 7px;
  `,
  Button: styled(Modal.Button)`
    /* @todo create themes for primary and secondary buttons */
    background-color: white;
    color: #373737;
    margin: 10px auto;
  `,
};
