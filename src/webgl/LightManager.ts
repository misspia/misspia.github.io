import * as THREE from "three";

export class LightManager {
  ambient: THREE.AmbientLight;
  group: THREE.Group;
  directionalFront: THREE.DirectionalLight;
  constructor() {
    this.ambient = new THREE.AmbientLight(0xffffff, 0.5);
    this.directionalFront = new THREE.DirectionalLight(0xffffff, 0.5);

    this.group = new THREE.Group();
    this.group.add(this.ambient);
    this.group.add(this.directionalFront);
  }
  update() {}
}
