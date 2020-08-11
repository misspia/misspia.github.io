import ReactDOM from 'react-dom'
import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import { Fonts, Colors } from './themes';

import Router from './router';
import Canvas from './components/Canvas';
import { AppProvider } from './context';
import { WebGLStates } from './types';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: ${Fonts.family};
    background-color: ${Colors.white};
  }
  a {
    text-decoration: none;

    &:visited, &:focus {
      color: ${Colors.black};
      outline: none;
      text-decoration: none;
    }
  }
  .fade-appear {
    opacity: 0.01;
  }
  .fade-appear.fade-appear-active {
    opacity: 1;
    transition: opacity 0.5s ease-in;
  }
`;

const CanvasWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

// https://hoang.moe/
// https://thibautfoussard.com/
function App({ }) {
  return (
    <AppProvider value={{
      webGLState: WebGLStates.CENTER
    }}>
      <GlobalStyle />
      <Router/>
      <CanvasWrapper>
        <Canvas />
      </CanvasWrapper>
    </AppProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
