import React, { Component } from 'react'
import { Section } from './hero.styles.js'

import ParticleSystem from './particleSystem.js'

class Hero extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    const PS = new ParticleSystem(this.canvas);
    PS.init();
    PS.setResizeHandler()
    PS.render()
  }
  render() {
    return <Section>
        <canvas ref={(ref) => this.canvas = ref}></canvas>
    </Section>
  }
}


export default Hero;
