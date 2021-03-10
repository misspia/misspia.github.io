import ReactDOM from 'react-dom'
import React, { useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';

import { Fonts, Colors } from './themes';

import Router from './router';
import { AppProvider } from './context';
import { WebGLStates } from './types';
import { useTabVisiblity } from './hooks';

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

// https://hoang.moe/
// https://thibautfoussard.com/
function App({ }) {
  const { isTabVisible } = useTabVisiblity();

  useEffect(() => {
    if(isTabVisible) {
      document.title = 'misspia';
    } else {
      document.title = 'dood come back T__T';
    }

  }, [isTabVisible]);
  return (
    <AppProvider value={{
      webGLState: WebGLStates.CENTER
    }}>
      <GlobalStyle />
      <Router/>
    </AppProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
