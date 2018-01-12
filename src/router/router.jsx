import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom'

import { Container } from './router.styles.js'
import Routes from './routes.js'

import Nav from '../nav/nav.jsx'

import Hero from '../hero/hero.jsx'
import About from '../about/about.jsx'
import Projects from '../projects/projects.jsx'

import styled from 'styled-components'


export default () => {
	return <HashRouter>
		<Container>
			<Nav/>
			<Switch>
				<Route exact path={Routes.home} component={Hero}/>
				<Route path={Routes.about} component={About}/>
				<Route path={Routes.projects} component={Projects}/>
			</Switch>
		</Container>
	</HashRouter>
};
