import * as THREE from "three";

export class FontBase {
  readonly group: THREE.Group;
  constructor() {
    this.group = new THREE.Group();
  }
  enter() {}
  exit() {}
  update() {}
}
