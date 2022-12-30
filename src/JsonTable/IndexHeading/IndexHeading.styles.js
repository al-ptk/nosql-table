import styled from 'styled-components';

export const StyledIndexHeading = {
  Container: styled.th`
    cursor: default;
    position: sticky;
    left: 0;
    background-color: #373737;
    z-index: 100;
    width: 150px;
    height: 50px;
    color: white;
    display: grid;
    place-items: center;
    border-right: ${(props) =>
      props.isVertical ? 'none' : '1px solid rgba(0, 0, 0, .5)'};
  `,
};
