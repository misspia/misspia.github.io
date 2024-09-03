import styled from "styled-components";
import { colors } from "@theme";
import { useCursorPosition } from "@hooks/useCursorPosition";
import React from "react";

const MOUSE_SIZE = 18;
const ACTIVE_MOUSE_SIZE_FACTOR = 2;

type CursorProps = {
  top: number;
  left: number;
  active: boolean;
};

const Cursor = styled.div.attrs<CursorProps>((props) => ({
  style: {
    top: `${props.top}px`,
    left: `${props.left}px`,
    width: `${props.active ? MOUSE_SIZE * ACTIVE_MOUSE_SIZE_FACTOR : MOUSE_SIZE}px`,
    height: `${props.active ? MOUSE_SIZE * ACTIVE_MOUSE_SIZE_FACTOR : MOUSE_SIZE}px`,
    opacity: props.active ? 0.5 : 1,
  },
}))<CursorProps>`
  pointer-events: none;
  position: absolute;

  border-radius: 50%;
  background-color: ${colors.black};
  transition-property: width, height, opacity;
  transition-duration: 0.3s;
  transform: translate(-50%, -50%);
`;

export const CustomCursor: React.FC<{ active: boolean }> = ({ active }) => {
  const { position } = useCursorPosition();

  return position && <Cursor top={position.y} left={position.x} active={active} />;
};
