import { createContext, useState } from'react';

import { WebGLStates } from '../types';
export const AppContext = createContext({});
export const AppConsumer = AppContext.Consumer;

export function AppProvider(props) {
  const [webGLState, setWebGLState] = useState(props.webGLState || WebGLStates.CENTER);

  return (
    <AppContext.Provider
      value={{
        webGLState,
        setWebGLState,
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}
