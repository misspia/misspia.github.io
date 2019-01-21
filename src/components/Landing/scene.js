import * as THREE from 'three';
import SceneManager from '../../sceneManager';

import vert from '../../shaders/box.vert';
import frag from '../../shaders/box.frag';
import WaterRefractionShader from '../../lib/waterRefractionShader';
import Refractor from '../../lib/refractor';
import { Images } from '../../themes';

export default class Scene extends SceneManager {
  constructor(canvas) {
    super(canvas);
    this.clock = new THREE.Clock();
    this.refractor = {};
  }
  init() {
    this.setCameraPos(0, 1, -8);
    this.lookAt(0, 0, 0);
    this.createRealCenterpiece();
    this.createReflectedCenterpiece();

    this.createRefractor();
  }
  createRealCenterpiece() {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.RawShaderMaterial({
      uniforms: {

      },
      fragmentShader: frag,
      vertexShader: vert, 
    });
    const box = new THREE.Mesh(geometry, material);
    box.position.set(0, 1, 0);
    this.scene.add(box);
  }
  createReflectedCenterpiece() {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.RawShaderMaterial({
      uniforms: {

      },
      fragmentShader: frag,
      vertexShader: vert, 
    });
    const refractedBox = new THREE.Mesh(geometry, material);
    refractedBox.position.set(0, -1, 0);
    this.scene.add(refractedBox);
  }
  createRefractor() {
    const geometry = new THREE.PlaneGeometry(10, 10);
    const options = {
      color: 0x999999,
      textureWidth: 1024,
      textureHeight: 1024,
      shader: WaterRefractionShader,
    };
    this.refractor = new Refractor(geometry, options);
    
    const dudvMap = new THREE.TextureLoader().load(Images.water);
    dudvMap.wrapS = THREE.RepeatWrapping;
    dudvMap.wrapT = THREE.RepeatWrapping;
    this.refractor.material.uniforms.tDudv.value = dudvMap;

    this.refractor.position.set( 0, 0, 0 );
    this.refractor.rotateX(-90 * Math.PI / 180)
    this.scene.add(this.refractor);
  }
  draw() {
    this.renderer.render(this.scene, this.camera);

    this.refractor.material.uniforms.time.value = this.clock.getElapsedTime();

    requestAnimationFrame(() => this.draw());
  }
}