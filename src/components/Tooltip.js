import { useEffect } from 'react';
import { useRef } from 'react';
import styled from 'styled-components';

const StyledTooltip = styled.div`
  position: fixed;
  z-index: 300;
  top: ${(props) => props.yPos}px;
  left: ${(props) => props.xPos}px;
  width: fit-content;
  height: fit-content;
  padding: 2px;
  background-color: black !important;
  color: white;
  transition: opacity 0.1s ease-in-out;
  opacity: 1;
`;

export default function Tooltip({ xPos, yPos, children }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) {
      console.log(ref.current);
    }

    const timer = setTimeout(() => {
      ref.current.classList.add('fade-out');
    }, 500);

    return () => clearTimeout(timer);
  }, [ref]);

  return (
    <StyledTooltip {...{ xPos, yPos }} ref={ref}>
      {children}
    </StyledTooltip>
  );
}
