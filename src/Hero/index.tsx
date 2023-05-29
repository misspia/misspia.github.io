import { useEffect, useRef, useMemo } from "react";
import styled from "styled-components";
import { Section } from "@components";
import { colors, fonts } from "@theme";

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
  font-weight: ${fonts.weight.semiBold};
  font-size: 36px;
  color: ${colors.white};
  letter-spacing: 1em;
  text-transform: uppercase;
`;

const Container = styled(Section)`
  position: relative;
  z-index: 1;
`;

export const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { width, height } = useWindowSize();
  const webgl = useMemo(() => {
    if (!canvasRef.current) {
      return;
    }
    const app = new WebGLApp();
    app.setup(canvasRef.current);
    return app;
  }, [canvasRef.current]);

  useEffect(() => {
    if (!webgl) return;

    webgl.resize(width, height);
  }, [width, height]);

  useEffect(() => {
    if (!webgl) return;
    webgl.render();
  }, [webgl]);

  return (
    <Container>
      <Canvas ref={canvasRef} />
      <Title>misspia</Title>
    </Container>
  );
};
