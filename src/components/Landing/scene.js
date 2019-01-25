import * as THREE from 'three';

import WaterRefractionShader from '../../lib/waterRefractionShader';
import SceneManager from '../../sceneManager';

import Refractor from '../../lib/refractor';
import { Images } from '../../themes';
import utils from '../../utils';

import dreamVert from '../../shaders/dream.vert';
import dreamFrag from '../../shaders/dream.frag';
import tintVert from '../../shaders/tint.vert';
import tintFrag from '../../shaders/tint.frag';


export default class Scene extends SceneManager {
  constructor(canvas) {
    super(canvas);
    this.clock = new THREE.Clock();
    this.refractor = {};
  }
  init() {
    document.addEventListener('mousemove', e => this.offsetCamera(e), false);
    this.disableOrbitControls();
    this.setCameraPos(0, 0.5, -5);
    this.lookAt(0, 0, 0);

    const directionalLight = new THREE.DirectionalLight( 0xffffff, 1.2 );
    directionalLight.position.set(-3, 5, -6);
    this.scene.add( directionalLight );

    const spotLight = new THREE.SpotLight(0xffffff, 0.9);
    spotLight.position.set(-3, 2, -2);
    this.scene.add(spotLight);

    this.createRealCenterpiece();
    this.createReflectedCenterpiece();
    this.createRefractor();
    this.createTintedSurface();
  }
  offsetCamera(e) {
    this.updateMousePosition(e);
    const centerCoord = {x: 0, y: 0, z: 0 };
    const degrees = utils.clamp(-40, 40, this.mouse.x * 0.1);
    const angle = utils.toRadians(degrees);
    const { x, z } = this.getCircleCoord(centerCoord, 5, angle);
    const posY = utils.clamp(0.5, 2.5, this.mouse.y * 0.01);
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
  createRealCenterpiece() {
    const geometry = new THREE.BoxGeometry(1, 1.7, 1, 10, 17, 10);

  //   const material = new THREE.MeshStandardMaterial({
  //     color: 0x000000,
  //     roughness: 0.5,
  //     metalness: 1,
  //     emissive: 0xb6b1a0,
  //   });
    const material = new THREE.MeshLambertMaterial({
      color: 0xb6b1a0,
    });
    this.box = new THREE.Mesh(geometry, material);
    this.box.position.set(0, 1.1, 0);
    this.scene.add(this.box);
  }
  createReflectedCenterpiece() {
    const geometry = new THREE.BoxGeometry(1, 1.7, 1);
    const material = new THREE.RawShaderMaterial({
      uniforms: {
        time: { type: 'f', value: 0.9 },
      },
      fragmentShader: dreamFrag,
      vertexShader: dreamVert, 
    });
    this.refractedBox = new THREE.Mesh(geometry, material);
    this.refractedBox.rotation.y += 90 * Math.PI / 180;
    this.refractedBox.position.set(0, -1, 0);
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
    this.refractor.rotation.x -= utils.toRadians(90);
    this.scene.add(this.refractor);
  }
  createTintedSurface() {
    const geometry = new THREE.CircleGeometry(3, 15);
    const material = new THREE.RawShaderMaterial({
      vertexShader: tintVert,
      fragmentShader: tintFrag,
      side: THREE.DoubleSide,
      transparent: true,
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.x -= utils.toRadians(90);
    mesh.position.set(0, -0.1, 0);
    this.scene.add(mesh);
  }
  draw() {
    this.renderer.render(this.scene, this.camera);

    this.refractor.material.uniforms.time.value = this.clock.getElapsedTime();

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