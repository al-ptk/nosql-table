import styled from 'styled-components';

export const StyledTP = {
  Container: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10%;
    position: relative;
    margin: 100px auto;
    width: 60vw;
    max-width: 560px;
    height: 40vh;
    background-color: transparent;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.7);
    border-radius: 15px;
  `,
  Button: styled.button`
    color: white;
    border: 1px solid;
    background-color: transparent;
    font-weight: bold;
    height: 2em;
    font-size: 24px;
    min-width: 100px;
    padding: 0px 20px;
    border-radius: 15px;
  `,
  Ruler: styled.hr`
    height: 80%;
  `,
};
