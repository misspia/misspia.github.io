import ReactDOM from 'react-dom'
import React, { Component } from 'react'

import styled from 'styled-components'
import { Fonts } from './themes/themes.js'

import Projects from './projects/projects.jsx'

const Body = styled.div`
  margin: 0;
  padding: 0;
  font-family: ${Fonts.family};
  font-size: ${Fonts.sizeRegular};
`;

class App extends Component {
	render() {
		return <Body>
      <Projects />
    </Body>
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
