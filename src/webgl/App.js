import * as THREE from 'three';

import SceneManager from './sceneManager';

import utils from '../utils';
import Water from './Water';
import RealityPiece from './RealityPiece';

import dreamVert from './shaders/dream.vert';
import dreamFrag from './shaders/dream.frag';

export default class App extends SceneManager {
  constructor(canvas) {
    super(canvas);
    this.clock = new THREE.Clock();
    this.water = new Water();
    this.realityPiece = new RealityPiece();
  }
  init() {
    document.addEventListener('mousemove', e => this.offsetCamera(e), false);
    this.disableOrbitControls();
    this.setCameraPos(0, 0.5, -5);
    this.lookAt(0, 0, 0);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
    directionalLight.position.set(-3, 5, -6);
    this.scene.add(directionalLight);

    const spotLight = new THREE.SpotLight(0xffffff, 0.9);
    spotLight.position.set(-3.0, 2, 2);
    this.scene.add(spotLight);

    this.createReflectedCenterpiece();
    this.scene.add(this.realityPiece.pivot);
    this.scene.add(this.water.pivot);
  }
  setState(state) {

  }
  offsetCamera(e) {
    this.updateMousePosition(e);
    const centerCoord = { x: 0, y: 0, z: 0 };
    const degrees = utils.clamp(-40, 40, this.mouse.x * 0.1);
    const angle = utils.toRadians(degrees);
    const { x, z } = this.getCircleCoord(centerCoord, 5, angle);
    const posY = utils.clamp(0.5, 5.0, this.mouse.y * 0.01);
    this.setCameraPos(x, posY, -z);
    this.lookAt(0, 0, 0);
  }
  getCircleCoord(centerCoord, radius, angle) {
    return {
      x: centerCoord.x + radius * Math.sin(angle),
      y: 0.5,
      z: centerCoord.y + radius * Math.cos(angle),
    }
  }

  createReflectedCenterpiece() {
    const geometry = new THREE.BoxGeometry(0.8, 1.7, 0.8);
    const material = new THREE.RawShaderMaterial({
      uniforms: {
        time: { type: 'f', value: 0.9 },
      },
      fragmentShader: dreamFrag,
      vertexShader: dreamVert,
    });
    this.refractedBox = new THREE.Mesh(geometry, material);
    this.refractedBox.rotation.x += 180 * Math.PI / 180;
    this.refractedBox.rotation.y -= 90 * Math.PI / 180;
    this.refractedBox.position.set(0, -1.2, 0);
    this.scene.add(this.refractedBox);
  }
  draw() {
    this.renderer.render(this.scene, this.camera);

    this.water.update(this.clock.getElapsedTime());

    requestAnimationFrame(() => this.draw());
  }
}

/**
 * material
 * https://dustinpfister.github.io/2018/04/30/threejs-materials/
 *
 * colors
 * https://codepen.io/mnmxmx/pen/BdjdMz
 *
 *
 */
