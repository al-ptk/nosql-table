export default function useCursor() {
  const cursorState = {
    position: [null, null],
    mode: 'normal',
  };

  const moveCursor = (direction) => {
    switch (direction) {
      case 'ArrowUp':
        console.log('up');
        break;
      case 'ArrowRight':
        console.log('right');
        break;
      case 'ArrowDown':
        console.log('down');
        break;
      case 'ArrowLeft':
        console.log('left');
        break;
      default:
        break;
    }
  };

  const handleArrowKeys = (e) => {
    if (cursorState.mode !== 'normal') return;

    e.preventDefault();
    const keyPressed = e.nativeEvent.key;
    const acceptedKeys = ['ArrowUp', 'ArrowRight', 'ArrowDown', 'ArrowLeft'];
    if (acceptedKeys.includes(keyPressed)) {
      moveCursor(keyPressed);
    }
    return;
  };

  return {
    handleArrowKeys,
  };
}
