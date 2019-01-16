import React from 'react';
import * as S from './Landing.styles';
import Scene from './scene';

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
  render() {
    return (
      <S.Canvas ref={ canvas => this.canvas = canvas }/>
    )
  }
}