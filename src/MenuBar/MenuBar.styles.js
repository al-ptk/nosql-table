import styled from 'styled-components';

export const StyledMenuBar = {
  Container: styled.header`
    position: fixed;
    top: 0;
    width: 100vw;
    height: 3em;
    z-index: 200;
    isolation: isolate;

    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 15px;
    padding: 0px 15px;

    background-color: #373737;
    color: white;
  `,
  Link: styled.a`
    background-color: transparent;
    color: white;
    border: none;
    text-decoration: none;
    font-size: 19px;
  `,
  FlexWrapper: styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
  `,
};
