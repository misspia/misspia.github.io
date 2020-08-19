import * as THREE from 'three';
import fragmentShader from './shaders/petal.frag';
import vertexShader from './shaders/petal.vert';
import utils from '../utils';

export default class Petal {
  constructor() {
    this.minY = utils.randomFloatBetween(0, 0.5);
    this.maxY = utils.randomFloatBetween(2, 3);
    this.positionYVelocity = utils.randomFloatBetween(0.005, 0.02);
    this.rotationVelocity = {
      x: utils.randomFloatBetween(0.01, 0.05),
      y: utils.randomFloatBetween(0.01, 0.05),
      z: utils.randomFloatBetween(0.01, 0.05),
    };

    const scale = utils.randomFloatBetween(0.0001, 0.001);
    this.geometry = this.createPetalGeometry(0.001);
    this.material = new THREE.RawShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uColor: { value: [1.0, 0.8, 0.8] },
        uAlpha: { value: 1.0 },
      },
      side: THREE.DoubleSide,
    });

    this.pivot = new THREE.Mesh(this.geometry, this.material);
    // this.position.set(
    //   utils.randomFloatBetween(-2, 2),
    //   utils.randomFloatBetween(this.minY + 0.1, this.maxY),
    //   utils.randomFloatBetween(-2, 2),
    // );
    this.position.set(0, this.maxY, 0);
  }

  get position() {
    return this.pivot.position;
  }

  get rotation() {
    return this.pivot.position;
  }

  get uniforms() {
    return this.material.uniforms;
  }

  createPetalGeometry(size = 1) {
    const petalShape = new THREE.Shape();
    petalShape.moveTo(0, 0);
    petalShape.bezierCurveTo(50, 100, -50, 100, 0, 0);

    const extrudeSettings = {
      amount: 1,
      bevelEnabled: true,
      bevelSegments: 2,
      steps: 2,
      bevelSize: 15,
      bevelThickness: 0.5
    };
    const geometry = new THREE.ExtrudeGeometry(petalShape, extrudeSettings);
    geometry.scale(size, size, size);

    return geometry;
  }

  remapAlpha(min, max, value) {
    return utils.remap(min, max, 0, 1, this.position.y);
  }

  update(time) {
    // this.rotation.x += this.rotationVelocity.x;
    // this.rotation.y += this.rotationVelocity.y;
    // this.rotation.z += this.rotationVelocity.z;

    if (this.position.y <= this.minY) {
      this.position.y = this.maxY;
    } else {
      this.position.y -= this.positionYVelocity;
    }


    if (this.position.y <= this.minY + 0.1) {
      this.uniforms.uAlpha.value = this.remapAlpha(this.minY,  this.minY + 0.1);
    }

    if (this.position.y >= this.maxY - 0.1) {
      this.uniforms.uAlpha.value = 1 - this.remapAlpha(this.maxY - 0.1, this.maxY);
    }
  }
}
