import React, { useRef, useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

import { useAppContext } from '../../hooks';
import WebGLApp from '../../webgl';
import * as S from './Canvas.styles';
import { WebGLStates } from '../../types';
import Routes from '../../router/routes';

const stateMap = {
  [Routes.HOME]: WebGLStates.CENTER,
  [Routes.PROJECTS]: WebGLStates.RIGHT,
};

function Canvas({
  location,
}) {
  const context = useAppContext();
  const canvasRef = useRef(null);
  const wrapperRef = useRef(null);
  const webgl = useRef(null);

  const setWebGLState = () => {
    const state = stateMap[location.pathname];
    if(!state) {
      return;
    }
    webgl.current.setState(state);
  };

  useEffect(() => {
    webgl.current = new WebGLApp();
    webgl.current.setup(canvasRef.current);

    const handleResize = () => {
      webgl.current.resize(wrapperRef.current.clientWidth, wrapperRef.current.clientHeight);
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    webgl.current.render();
    setWebGLState();

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  useEffect(() => {
    if(webgl.current === null) {
      return;
    }
    setWebGLState();
  }, [location]);

  return (
    <S.Wrapper ref={wrapperRef}>
      <S.Canvas ref={canvasRef}/>
    </S.Wrapper>
  )
}

export default withRouter(Canvas);
