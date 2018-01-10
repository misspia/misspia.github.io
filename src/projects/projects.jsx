import React, { Component } from 'react'
import { Container, Title, Content } from './projects.styles.js'
import Project from './project.jsx'
import Metadata from './projects.metadata.js'

class Projects extends Component {
  constructor() {
      super();
  }
  renderProjects() {
    return Metadata.projects.map((project, index) => {
      return this.renderProject(project, index);
    })
  }
  renderProject(project, index) {
    return <Project
          key={index}
          title={project.title}
          image={project.image}
          github={project.github}
          demo={project.demo}/>
  }
  render() {
    return <Container>
      <Title>projects</Title>
      <Content>
        {this.renderProjects()}
      </Content>
    </Container>

  }
}

export default Projects;
