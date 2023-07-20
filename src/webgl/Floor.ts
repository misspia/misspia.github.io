import * as THREE from "three";

export class Floor {
  gemoetry: THREE.PlaneGeometry;
  material: THREE.Material;
  mesh: THREE.Mesh;
  constructor() {
    this.gemoetry = new THREE.PlaneGeometry(100, 100);
    this.material = new THREE.MeshBasicMaterial({ color: 0xffffff });
    this.mesh = new THREE.Mesh(this.gemoetry, this.material);
    this.mesh.receiveShadow = true;
  }
  update() {}
}
