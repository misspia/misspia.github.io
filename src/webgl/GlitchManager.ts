import * as THREE from "three";

export class GlitchManager {
  scene: THREE.Scene;
  renderTarget: THREE.WebGLRenderTarget;
  constructor() {
    this.scene = new THREE.Scene();
    this.renderTarget = new THREE.WebGLRenderTarget(
      window.innerWidth,
      window.innerHeight
    );
  }
  add(object: THREE.Object3D) {
    this.scene.add(object);
  }
}
