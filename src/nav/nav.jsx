import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import {
  Container,
  Brand, Heading, Subheading,
  Tabs
} from './nav.styles.js'

import Metadata from './nav.metadata.js'

class Nav extends Component {
  constructor() {
    super();
  }
  renderBrand() {
    return <Brand>
      <NavLink to={Metadata.brand.to}/>
      <Heading>{Metadata.brand.heading}</Heading>
      <Subheading>{Metadata.brand.subheading}</Subheading>
    </Brand>
  }
  renderTabs() {
    const tabs = Metadata.tabs.map((tab, index) => {
      return this.renderTab(tab, index);
    })
    return <Tabs>
      {tabs}
    </Tabs>
  }
  renderTab(tab, index) {
    return <NavLink
            key={index}
            to={tab.to}>
      {tab.label}
    </NavLink>
  }
  render() {
    return <Container>
      {this.renderBrand()}
      {this.renderTabs()}
    </Container>
  }
}


export default Nav;
