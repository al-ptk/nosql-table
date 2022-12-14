export default function useCursor() {
  const cursorState = {
    position: [1, 1],
  };

  const resetCursorPosition = () => {
    cursorState.position = [null, null];
  };

  const setCursorPosition = (coords) => {
    cursorState.position = coords;
    console.log(cursorState.position);
  };

  return {
    resetCursorPosition,
    setCursorPosition,
  };
}
