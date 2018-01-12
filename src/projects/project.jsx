import React, { Component } from 'react'
import { projectAnimateIn, projectHover } from './animations.js'

import {
  ProjectContainer,
  BGImage,
  HiddenInfo, Subtitle, LinksRow,
  DemoButton, SourceCodeButton
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
    console.log('mount', this.props.title)
    projectAnimateIn(this.container)
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
    return <DemoButton
          target='_blank'
          href={this.props.demo}>
          Demo
    </DemoButton>
  }
  renderGithubLink() {
    return <SourceCodeButton
          target='_blank'
          href={this.props.github}>
      {`< / >`}
    </SourceCodeButton>
  }
  handleMouseMove(e) {
    // console.log(e.target);
  }
  render() {
    return <ProjectContainer
        innerRef={(ref) => this.container = ref}
        onMouseOver={(e) => this.handleMouseMove(e)}>
        {this.renderBGImage()}
        {this.renderHiddenInfo()}
      </ProjectContainer>
  }
}

export default Project;
