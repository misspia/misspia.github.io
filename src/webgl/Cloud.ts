import * as THREE from "three";
import fragmentShader from "./shaders/cloud.frag?raw";
import vertexShader from "./shaders/cloud.vert?raw";

export class Cloud {
  geometry: THREE.PlaneGeometry;
  material: THREE.Material;
  mesh: THREE.Mesh;

  constructor() {
    this.geometry = new THREE.PlaneGeometry(1, 1);
    this.material = new THREE.RawShaderMaterial({
      fragmentShader,
      vertexShader,
      uniforms: {},
    });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
  }

  get position() {
    return this.mesh.position;
  }
  update() {}
}
