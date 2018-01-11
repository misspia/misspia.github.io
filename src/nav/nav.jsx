import React, { Component } from 'react'
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
    return <div
      key={index}>
      {tab.label}
    </div>
  }
  render() {
    return <Container>
      {this.renderBrand()}
      {this.renderTabs()}
    </Container>
  }
}


export default Nav;
