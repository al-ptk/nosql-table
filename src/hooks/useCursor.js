import { useState } from 'react';

export default function useCursor() {
  const [cursor, setCursor] = useState([null, null]);

  const handleArrowKeys = (e) => {
    console.log(e);
  };

  return {
    cursor,
    setCursor,
    handleArrowKeys,
  };
}
