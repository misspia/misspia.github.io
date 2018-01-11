const getRandomFloat = (min, max) => {
    return Math.random() * (max - min) + min;
}


class Particle {
  constructor({coord, context, growthRate, velocity, canvas}) {
    this.context = context;
    this.growthRate = growthRate;
    this.velocity = velocity;
    this.canvasWidth = canvas.width;
    this.canvasHeight = canvas.height;

    this.x = coord.x;
    this.y = coord.y;

    this.vel = {
      x:( getRandomFloat(-20, 20) / 100) + 1,
      y: (getRandomFloat(-20, 20) / 100) + 1,
      min: getRandomFloat(2, 10) / 100,
      max: getRandomFloat(10, 100) / 10,
    }
    this.color = 'rgba(0, 0, 0, 0.7)';
    // this.color = 'rgba(255,0,0,0.5)';

  }
  render() {
    this.context.beginPath();
    this.context.fillStyle = this.color;
    this.context.fillRect(this.x, this.y, 0.5, 0.5);
    this.context.fill();
  }
  update() {
    const forceDirection = {
      x: getRandomFloat(-1, 1),
      y: getRandomFloat(-1, 1),
    };

    // TODO move to calc fn
    if(Math.abs(this.vel.x + forceDirection.x) < this.vel.max) {
      this.vel.x += forceDirection.x;
    }
    if(Math.abs(this.vel.y + forceDirection.y) < this.vel.max) {
      this.vel.y += forceDirection.y;
    }

    this.x += this.vel.x + getRandomFloat(-1, 1);
    this.y += this.vel.y + getRandomFloat(-1, 1);
    this.vel.x *= this.growthRate;
    this.vel.y  *= this.growthRate;

    if(Math.abs(this.vel.x) > this.vel.min) {
      this.vel.x *= this.velocity;
    }
    if(Math.abs(this.vel.y) > this.vel.min) {
      this.vel.y *= this.velocity;
    }
    this.testBorder();
  }
  testBorder() {
    if(this.x > this.canvasWidth) {
      this.setPosition(this.x, 'x');
    } else if(this.x < 0) {
      this.setPosition(this.canvasWidth, 'x')
    }
    if(this.y > this.canvasHeight) {
      this.setPosition(this.y, 'y');
    } else if(this.y < 0) {
      this.setPosition(this.canvasHeight, 'y')
    }
  }
  setPosition(pos, axis) {
    this[axis] = pos;
  }
}

export default Particle;
