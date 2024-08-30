import { useEffect, useRef, useMemo } from "react";
import styled from "styled-components";
import { Section } from "@components";
import { colors, fonts } from "@theme";

import { WebGLApp } from "../webgl";
import { useWindowSize } from "./useWindowSize";

/**
 * loading
 * https://www.igloo.inc/
 *
 *
 */
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
  margin-bottom: 10em;
`;

const Title = styled.h1`
  font-weight: ${fonts.weight.semiBold};
  font-size: 36px;
  color: ${colors.black};
  letter-spacing: 0.3em;
  margin-right: -0.3em;
  text-transform: uppercase;
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 5px;
`;

const Link = styled.a`
  position: relative;
  font-size: 16px;
  color: ${colors.black};
  cursor: pointer;
  text-decoration: none;

  &::before {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    width: 0%;
    height: 1px;
    background-color: ${colors.black};
    transition: 0.35s all;
  }

  &:hover {
    &::before {
      width: 100%;
    }
  }
`;

type Link = {
  label: string;
  href: string;
};

const LINKS: Link[] = [
  {
    label: "sketchbook",
    href: "https://misspia.github.io/sketchbook/",
  },
  {
    label: "linkedin",
    href: "https://www.linkedin.com/in/misspia/",
  },
  {
    label: "github",
    href: "https://github.com/misspia",
  },
];
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
      <ContentContainer>
        <Title>m i s s p i a</Title>
        <Links>
          {LINKS.map((link) => (
            <Link key={link.label} href={link.href} target="_blank">
              {link.label}
            </Link>
          ))}
        </Links>
      </ContentContainer>
    </Container>
  );
};
