import ReactDOM from 'react-dom'
import React from 'react';
import { createGlobalStyle } from 'styled-components';

import { Colors, Fonts } from './themes';
import Landing from './components/Landing/Landing';
import Projects from './components/Projects/Projects';

const GlobalStyle = createGlobalStyle`
  @import url('${Fonts.url}');

  body {
    margin: 0;
    font-family: ${Fonts.family};
    background-color: ${Colors.white};
  }
`;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      landing: true,
    };
  }
  togglePage() {
    this.setState( prevState => ({ landing: !prevState.landing }));
  }
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        {
          this.state.landing ?
          <Landing toProjects={() => this.togglePage()} /> :
          <Projects toLanding={() => this.togglePage()}/>
        }
      </React.Fragment>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
