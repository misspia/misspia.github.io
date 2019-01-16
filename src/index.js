import ReactDOM from 'react-dom'
import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';
import { Colors, Fonts } from './themes';

const GlobalStyle = createGlobalStyle`
  @import url('${Fonts.url}');

  body {
    margin: 0;
    font-family: ${Fonts.family};
    background-color: ${Colors.white};
    
  }
`;

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        hihi
      </React.Fragment>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
