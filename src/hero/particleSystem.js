import Particle from './particle.js'

class ParticleSystem {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
    this.windowWidth = this.canvas.width = document.documentElement.clientWidth;
    this.windowHeight = this.canvas.height = document.documentElement.clientHeight;

    this.numberParticlesStart = 100;
    this.growthRate = 2.5;
    this.velocity = 0.2;

    this.radius = this.canvas.height * 0.25;
    this.particles = [];
  }
  render() {
    const length = this.particles.length;
    for(let i = 0; i < length; i++) {
      this.particles[i].update();
      this.particles[i].render();
    }
    requestAnimationFrame(() => this.render());
  }
  init() {
    for(let i = 0; i < this.numberParticlesStart; i ++) {
      const angle = Math.random() * 360;

      const coord = {
        x: this.windowWidth * 0.5 + (Math.cos(angle) * this.radius),
        y: this.windowHeight * 0.5 + (Math.sin(angle) * this.radius),
      };

      const config = {
        coord,
        context: this.context,
        growthRate: this.growthRate,
        velocity: this.velocity,
        canvas: this.canvas
      }
      const p = new Particle(config);
      this.particles.push(p);
    }
  }
  setResizeHandler() {
    window.addEventListener('resize', () => {
      this.windowWidth = this.canvas.width = document.documentElement.clientWidth;
      this.windowHeight = this.canvas.height = document.documentElement.clientHeight;
      this.particles = [];
      this.context.clearRect(0, 0, this.windowWidth, this.windowHeight);
      this.init();
    })
  }
}

export default ParticleSystem;
