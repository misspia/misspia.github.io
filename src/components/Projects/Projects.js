import React from 'react';

import * as S from './Projects.styles';
import Metadata from './Projects.metadata';

export default class Projects extends React.Component {
  renderProjects() {
    return Metadata.map(project => (
      <S.ProjectContainer key={project.name}>
        <S.ImageContainer>
          <S.Image src={project.img} alt={project.name}/>
        </S.ImageContainer>
        <S.InfoContainer>
          <S.Name>{project.name}</S.Name>
          <S.Links>
            <S.Link href={project.demo} target='_blank'>
              demo
            </S.Link>
            <S.Link href={project.github} target='_blank'>
              github
            </S.Link>
          </S.Links>
        </S.InfoContainer>
      </S.ProjectContainer>
    ))
  }
  render() {
    return (
      <S.Container>
        <S.HomeButton onClick={() => this.props.toLanding()}>x</S.HomeButton>
        <S.Title>selected works</S.Title>
        {this.renderProjects()}
      </S.Container>
    )
  }
}

/**
 * https://itnext.io/anime-js-react-transition-group-5f6d0055a3a0
 * https://reactjs.org/docs/animation.html
 * https://www.reddit.com/r/reactjs/comments/76yqup/how_to_animate_switching_between_the_components/
 * 
 * hover
 * https://tympanus.net/codrops/2018/04/10/webgl-distortion-hover-effects/
 * 
 * layout
 * https://dribbble.com/shots/4030826-Portfolio-Home-Navigation 
 */