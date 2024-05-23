import * as THREE from "three";

export class Lights {
  public group: THREE.Group;

  constructor() {
    const ambient = new THREE.AmbientLight(0xffffff, 1);

    const directional1 = new THREE.DirectionalLight(0xaaaaff, 0.2);
    directional1.position.set(1, 1, 1);
    const directional2 = new THREE.DirectionalLight(0xaaaaff, 0.4);
    directional2.position.set(1, 0, 1);
    const directional3 = new THREE.DirectionalLight(0xaaaaff, 0.6);
    directional3.position.set(1, -1, 1);

    this.group = new THREE.Group();

    this.group.add(ambient);
    this.group.add(directional1);
    this.group.add(directional2);
    this.group.add(directional3);
  }

  update() {}
}
