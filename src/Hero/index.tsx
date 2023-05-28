import { useEffect, useRef } from "react";
import styled from "styled-components";
import { Section } from "@components";
import { colors } from "@theme";

import { WebGLApp } from "../webgl";
import { useWindowSize } from "./useWindowSize";

const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const Title = styled.h1`
  color: ${colors.white};
  letter-spacing: 0.5em;
  text-transform: uppercase;
`;

const Container = styled(Section)`
  position: relative;
  z-index: 1;
`;

export const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const webgl = useRef<WebGLApp>(new WebGLApp());
  const { width, height } = useWindowSize();

  useEffect(() => {
    if (!canvasRef.current) return;

    webgl.current.setup(canvasRef.current);
    webgl.current.render();
  }, [canvasRef.current]);

  useEffect(() => {
    webgl.current.resize(width, height);
  }, [width, height]);

  return (
    <Container>
      <Canvas ref={canvasRef} />
      <Title>misspia</Title>
    </Container>
  );
};
