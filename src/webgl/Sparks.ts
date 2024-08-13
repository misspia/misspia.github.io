import * as THREE from "three";

export class Sparks {
  geometry: THREE.BufferGeometry;
  material: THREE.Material;
  group: THREE.Points;

  constructor() {
    this.group = new THREE.Points();
  }

  update() {}
}
