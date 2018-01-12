import Particle from './particle.js'

class ParticleSystem {
  constructor(canvas) {
    this.canvas = canvas;
    this.canvas.width = this.getDimensions().x;
    this.canvas.height = this.getDimensions().y;
    this.context = canvas.getContext('2d');

    this.particleTotal = this.getInitialParticleTotal();
    this.particleDecrement = this.particleTotal * 0.0005
    this.velocity = 0.01;
    this.radius = this.canvas.height * 0.16;
    this.particles = [];
  }
  getDimensions() {
    return {
      x: document.documentElement.clientWidth,
      y: document.documentElement.clientHeight
    }
  }
  getInitialParticleTotal() {
    const greatestDimension = Math.max(this.canvas.width, this.canvas.height)
    return greatestDimension * 2;
  }
  render() {
    this.particles.forEach(particle => {
      particle.update();
      particle.render();
    })
    this.particleTotal -= this.particleDecrement;
    if(this.particleTotal > 0) requestAnimationFrame(() => this.render());
  }
  init() {
    for(let i = 0; i < this.particleTotal; i ++) {
      const config = {
        coord: this.getRandomCoord(),
        context: this.context,
        velocity: this.velocity,
        canvas: this.canvas
      }
      const p = new Particle(config);
      this.particles.push(p);
    }
  }
  getRandomCoord() {
    const angle = Math.random() * 360;
    return {
      x: this.canvas.width * 0.5 + (Math.cos(angle) * this.radius),
      y: this.canvas.height * 0.5 + (Math.sin(angle) * this.radius),
    };
  }
  setResizeHandler() {
    window.addEventListener('resize', () => {
      this.canvas.width = this.getDimensions().x;
      this.canvas.height = this.getDimensions().y;
      this.particles = []; // clear system
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.init();
    })
  }
}

export default ParticleSystem;
