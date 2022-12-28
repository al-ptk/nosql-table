import styled from 'styled-components';
import RotateIcon from '../../../assets/svgs/RotateIcon';

export const StyledRotateButton = {
  Container: styled.th`
    background-color: inherit;
    width: 150px;
    height: 50px;
    position: sticky;
    left: 0px;
    z-index: 10;
  `,
  Button: styled.button`
    background-color: transparent;
    border: none;
    height: 100%;
    width: 100%;
    color: white;
  `,
  ButtonIcon: styled(RotateIcon)`
    fill: white;
    width: 30px;
  `,
};
