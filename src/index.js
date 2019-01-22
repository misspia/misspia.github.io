import ReactDOM from 'react-dom'
import React from 'react';
import { createGlobalStyle } from 'styled-components';

import { Colors, Fonts } from './themes';
import Landing from './components/Landing/Landing';

const GlobalStyle = createGlobalStyle`
  @import url('${Fonts.url}');

  body {
    margin: 0;
    font-family: ${Fonts.family};
    background-color: ${Colors.white};
  }
`;

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <Landing />
      </React.Fragment>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
