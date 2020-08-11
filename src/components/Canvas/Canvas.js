import React, { useRef, useEffect } from 'react';

import WebGLApp from '../../webgl';
import * as S from './Canvas.styles';

export default function Canvas() {
  const canvasRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const webgl = new WebGLApp();
    webgl.setup(canvasRef.current);

    const handleResize = () => {
      webgl.resize(wrapperRef.current.clientWidth, wrapperRef.current.clientHeight);
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    webgl.render();

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <S.Wrapper ref={wrapperRef}>
      <S.Canvas ref={canvasRef}/>
    </S.Wrapper>
  )
}
