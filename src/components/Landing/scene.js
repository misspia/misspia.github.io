import * as THREE from 'three';

import WaterRefractionShader from '../../lib/waterRefractionShader';
import SceneManager from '../../sceneManager';

import Refractor from '../../lib/refractor';
import { Images } from '../../themes';

import realityVert from '../../shaders/reality.vert';
import realityFrag from '../../shaders/reality.frag';
import dreamVert from '../../shaders/dream.vert';
import dreamFrag from '../../shaders/dream.frag';

export default class Scene extends SceneManager {
  constructor(canvas) {
    super(canvas);
    this.clock = new THREE.Clock();
    this.refractor = {};
  }
  init() {
    this.setCameraPos(0, 0.5, -5);
    this.lookAt(0, 0, 0);

    const light = new THREE.AmbientLight(0x000000, 0.9);
    this.scene.add(light);

    const directionalLight = new THREE.DirectionalLight( 0xffffff, 1.2 );
    directionalLight.position.set(0, 5, -6);
    this.scene.add( directionalLight );

    this.createRealCenterpiece();
    this.createReflectedCenterpiece();
    this.createRefractor();
  }
  createRealCenterpiece() {
    const geometry = new THREE.BoxGeometry(1, 1.5, 1);
    const material = new THREE.MeshStandardMaterial({
      color: 0x000000,
      roughness: 0.5,
      metalness: 1,
      // emissive: 0xb6b1a0,
    });
    this.box = new THREE.Mesh(geometry, material);
    this.box.position.set(0, 1, 0);
    this.scene.add(this.box);
  }
  createReflectedCenterpiece() {
    const geometry = new THREE.BoxGeometry(1, 1.5, 1);
    const material = new THREE.RawShaderMaterial({
      uniforms: {
        time: { type: 'f', value: 0.9 },
      },
      fragmentShader: dreamFrag,
      vertexShader: dreamVert, 
    });
    this.refractedBox = new THREE.Mesh(geometry, material);
    this.refractedBox.position.set(0, -0.9, 0);
    this.scene.add(this.refractedBox);
  }
  createRefractor() {
    const geometry = new THREE.PlaneGeometry(20, 20);
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
    // this.refractedBox.material.uniforms.time.value = this.clock.getElapsedTime();

    requestAnimationFrame(() => this.draw());
  }
}

/**
 * material
 * https://hub.packtpub.com/working-basic-components-make-threejs-scene/
 * http://blog.cjgammon.com/threejs-materials
 * https://codepen.io/Hornebom/pen/dVLbvr?editors=1010
 * 
 * colors
 * https://codepen.io/mnmxmx/pen/BdjdMz
 */