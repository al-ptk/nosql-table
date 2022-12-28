import styled from 'styled-components';

export const Modal = {
  Backdrop,
  Container: styled.div`
    ${(props) => props.cssOverride || ''}
    position: relative;
    overflow-y: scroll;
    width: 80vw;
    height: 80vh;
    margin: 10vh auto;
    padding: 80px 50px;
    background-color: #e5e5e5;
  `,
};

const StyledBackdrop = styled.div`
  position: fixed;
  inset: 0 0 0 0;
  background-color: rgba(0, 0, 0, 0.5);
  isolation: isolate;
  z-index: 300;
`;

function Backdrop({ children, ...props }) {
  return (
    <StyledBackdrop
      onClick={(e) => {
        e.stopPropagation();
      }}
      {...props}
    >
      {children}
    </StyledBackdrop>
  );
}

