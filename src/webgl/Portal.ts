import * as THREE from "three";
import fragmentShader from "./shaders/portal.frag?raw";
import vertexShader from "./shaders/portal.vert?raw";

export class Portal {
  mesh: THREE.Mesh;
  material: THREE.ShaderMaterial;
  geometry: THREE.PlaneGeometry;
  constructor() {
    this.geometry = new THREE.PlaneGeometry(2, 2);
    this.material = new THREE.ShaderMaterial({
      fragmentShader,
      vertexShader,
      uniforms: {},
      transparent: true,
    });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
  }
  update() {}
}
