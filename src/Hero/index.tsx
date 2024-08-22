import { useEffect, useRef, useMemo } from "react";
import styled from "styled-components";
import { Section, Frame } from "@components";
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

const Container = styled(Section)`
  position: relative;
  z-index: 1;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-weight: ${fonts.weight.semiBold};
  font-size: 36px;
  /* color: ${colors.white}; */
  color: ${colors.black};
  letter-spacing: 0.5em;
  margin-right: -0.5em;
  text-transform: uppercase;
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 5px;
`;

const Link = styled.a`
  font-size: 16px;
  color: ${colors.black};
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
      {/* <Frame> */}
      <ContentContainer>
        <Title>m i s s p i a</Title>
        <Links>
          <Link>sketchbook</Link>
          <Link>linkedin</Link>
          <Link>github</Link>
        </Links>
      </ContentContainer>

      {/* </Frame> */}
    </Container>
  );
};
