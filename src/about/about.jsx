import React, { Component } from 'react'
import {
  Section, Title, Content,
  PlainKeyword, LinkKeyword
} from './about.styles.js'
import Metadata from './about.metadata.js'

class About extends Component {
  constructor() {
    super();
  }
  renderKeyword(key) {
    const { label, color } = Metadata[key];

    return <PlainKeyword color={color}>
      {label}
    </PlainKeyword>;
  }
  renderLink(key) {
    const { label, color, url } = Metadata[key];

    return <LinkKeyword color={color} href={url} target='_blank'>
      {label}
    </LinkKeyword>;
  }
  render() {
    return <Section>
        <Title>about</Title>
        <Content>
          {`Hi there, my name is `}
          {this.renderKeyword('name')}
          {` and I am currently studying at the University of Waterloo.
            Here, take a copy of my `}
          {this.renderLink('resume')}
          {` and feel free to contact me at `}
          {this.renderKeyword('email')}
          {`. I am well versed in both client and server side web development.
            My passions lie in generative art and data visualization.
            Checkout some of my projects or find me at `}
          {this.renderLink('github')}
          {` - `}
          {this.renderLink('linkedin')}
          {` - `}
          {this.renderLink('codepen')}
        </Content>
    </Section>
  }
}

export default About;
