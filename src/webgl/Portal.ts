import * as THREE from "three";
import fragmentShader from "./shaders/portal.frag?raw";
import vertexShader from "./shaders/portal.vert?raw";

export class Portal {
  mesh: THREE.Mesh;
  geometry: THREE.PlaneGeometry;
  material: THREE.ShaderMaterial;
  box: THREE.Box3;
  constructor() {
    this.geometry = new THREE.PlaneGeometry(2, 3.5);
    this.material = new THREE.ShaderMaterial({
      fragmentShader,
      vertexShader,
      uniforms: {},
      transparent: true,
      side: THREE.DoubleSide,
    });
    this.mesh = new THREE.Mesh(this.geometry, this.material);

    this.mesh.geometry.computeBoundingBox();
    this.box = new THREE.Box3();

    if (this.mesh.geometry.boundingBox) {
      this.box
        .copy(this.mesh.geometry.boundingBox)
        .applyMatrix4(this.mesh.matrixWorld);
    }
  }
  get height() {
    return this.box.max.y - this.box.min.y;
  }
  get width() {
    return this.box.max.x - this.box.min.x;
  }
  update() {}
}
