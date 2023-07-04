import * as THREE from "three";

export class LightManager {
  ambient: THREE.AmbientLight;
  group: THREE.Group;
  constructor() {
    this.ambient = new THREE.AmbientLight(0xffffff, 0.5);

    this.group = new THREE.Group();
    this.group.add(this.ambient);
  }
  update() {}
}
