import ReactDOM from 'react-dom'
import React, { Component } from 'react'

import styled from 'styled-components'
import { Fonts } from './themes/themes.js'

import Nav from './nav/nav.jsx'
import Hero from './hero/hero.jsx'
import About from './about/about.jsx'
import Projects from './projects/projects.jsx'

const Container = styled.div`
  margin: 0;
  padding: 0;
  font-family: ${Fonts.family};
  font-size: ${Fonts.sizeRegular};
`;

class App extends Component {
	render() {
		return <Container>
      <Nav />
      <Hero />
      <About />
      <Projects />
    </Container>
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
