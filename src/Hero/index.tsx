import { useEffect, useRef, useMemo, useState } from "react";
import styled from "styled-components";
import { Section } from "@components";
import { colors, fonts, mediaQueries } from "@theme";
import { useWindowSize } from "@hooks/useWindowSize";

import { WebGLApp } from "@webgl/WebGLApp";
import { CustomCursor } from "./CustomCursor";

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
  font-size: 3em;
  color: ${colors.black};
  letter-spacing: 0.75em;
  margin-right: -0.3em;
  text-transform: uppercase;

  ${mediaQueries.s} {
    font-size: 2.5em;
    letter-spacing: 0.6em;
  }
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 6px;
  
  ${mediaQueries.s} {
    gap: 9px;
  }
`;

const Link = styled.a`
  position: relative;
  color: ${colors.black};
  text-decoration: none;
  font-size: 1.25em ;
  
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

  ${mediaQueries.s} {
    font-size: 1.5em;
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
  const [cursorActive, setCursorActive] = useState(false);

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
        <Title>misspia</Title>
        <Links>
          {LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              onMouseEnter={() => setCursorActive(true)}
              onMouseLeave={() => setCursorActive(false)}
            >
              {link.label}
            </Link>
          ))}
        </Links>
      </ContentContainer>
      <CustomCursor active={cursorActive} />
    </Container>
  );
};
