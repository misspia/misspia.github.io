import { useEffect, useState } from "react";

export const useCursorPosition = () => {
  const [position, setPosition] = useState<null | {x: number; y: number }>(null);

  useEffect(() => {
    const mouseMoveHandler = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      setPosition({ x: clientX, y: clientY });
    };
    document.addEventListener("mousemove", mouseMoveHandler);

    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  return { position };
};
