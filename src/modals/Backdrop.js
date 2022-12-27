import styled from 'styled-components';

const StyledBackdrop = styled.div`
  position: fixed;
  inset: 0 0 0 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export default function Backdrop({ children, ...props }) {
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
