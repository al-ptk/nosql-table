import styled from 'styled-components';

export const StyledHeadingCell = {
  Container: styled.th`
    width: 150px;
    height: 50px;
    position: relative;
    color: white;
    display: grid;
    place-items: center;
  `,
  Textarea: styled.textarea`
    color: white;
    background-color: inherit;
    border: none;
    width: 90%;
    height: fit-content;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    padding-bottom: 3px;
    text-align: center;
    overflow: hidden;

    :focus {
      outline: none;
      border: 1px solid rgba(255, 255, 255, 0.7);
      box-shadow: 0px 0px 8px rgba(255, 255, 255, 0.3);
    }
  `,
};
