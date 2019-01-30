import React from 'react';
import { Link } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';

import Routes from '../../routes';
import Scene from './scene';

import * as S from './Landing.styles';

import { email, projectsPage, socialLinks } from './Landing.metadata';

export default class Landing extends React.Component {
  constructor() {
    super();
    this.state = {
      scene: {},
    }
  }
  componentDidMount() {
    this.initCanvas();
    this.addResizeHandler();

    this.state.scene = new Scene(this.canvas);
    this.state.scene.render();
  }
  initCanvas = () => {
    this.canvas.width = this.getDimensions().x;
    this.canvas.height = this.getDimensions().y;
  }
  addResizeHandler = () => {
    window.addEventListener('resize', this.resizeHandler);
  }
  removeResizeHandler = () => {
    window.removeEventListener('resize', this.resizeHandler);
  }
  resizeHandler = () => {
    this.canvas.width = this.getDimensions().x;
    this.canvas.height = this.getDimensions().y;
    this.state.scene.resize(this.canvas.width, this.canvas.height)
  }
  getDimensions = () => {
    return {
      x: document.documentElement.clientWidth,
      y: document.documentElement.clientHeight
    }
  }
  renderLinks() {
    return socialLinks.map((link, index) => (
      <S.Link
        key={link.label}
        href={link.href}
        target='_blank'>
        {link.label}
      </S.Link>
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
         <S.Canvas ref={ canvas => this.canvas = canvas }/>
          <S.Title>
            pia leung
          </S.Title>
          <S.LinksContainer>
            <Link to={Routes.projects}>
              <S.ProjectLink>
                {projectsPage.label}
              </S.ProjectLink>
            </Link>
            {this.renderLinks()}
          </S.LinksContainer>
          <S.ContactLink>{email.label}</S.ContactLink>
        </S.Container>
      
      </CSSTransitionGroup>
    )
  }
}
