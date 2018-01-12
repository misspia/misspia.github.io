import React, { Component } from 'react'

import {
  ProjectContainer,
  BGImage,
  HiddenInfo, Subtitle, LinksRow, LinkButton
} from './projects.styles.js'

class Project extends Component {
  constructor(props) {
    super(props);
  }
  static defaultProps = {
      title: '',
      github: '',
      demo: '',
      image: '',
  }
  componentDidMount() {
    console.log('mounted', this.props.title)
  }
  renderBGImage() {
    return <BGImage
          src={this.props.image}
          alt={`${this.props.title} project banner`}/>;
  }
  renderHiddenInfo() {
    return <HiddenInfo>
        <Subtitle>{this.props.title}</Subtitle>
        {this.renderLinks()}
    </HiddenInfo>
  }
  renderLinks() {
    return <LinksRow>
      {this.renderDemoLink()}
      {this.renderGithubLink()}
    </LinksRow>
  }
  renderDemoLink() {
    return <LinkButton
          target='_blank'
          href={this.props.demo}>
          Demo
    </LinkButton>
  }
  renderGithubLink() {
    return <LinkButton
          target='_blank'
          href={this.props.github}>
      {`< / >`}
    </LinkButton>
  }
  render() {
    return <ProjectContainer>
      {this.renderBGImage()}
      {this.renderHiddenInfo()}
    </ProjectContainer>
  }
}

export default Project;
