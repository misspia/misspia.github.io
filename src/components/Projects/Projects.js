import React from 'react';
import { Link } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';

import * as S from './Projects.styles';
import Metadata from './Projects.metadata';
import Routes from '../../routes';

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
      <CSSTransitionGroup
        transitionName='fade'
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}>

        <S.Container>
          <Link to={Routes.home}>
            <S.HomeButton>x</S.HomeButton>
          </Link>
          <S.Title>selected works</S.Title>
          {this.renderProjects()}
        </S.Container>

      </CSSTransitionGroup>
    )
  }
}

/**
 * hover
 * https://tympanus.net/codrops/2018/04/10/webgl-distortion-hover-effects/
 * 
 * layout
 * https://dribbble.com/shots/4030826-Portfolio-Home-Navigation 
 */