import * as THREE from "three";
import fragmentShader from "@webgl/shaders/sky.frag";
import vertexShader from "@webgl/shaders/sky.vert";
import { toRadians } from "@utils";

export class Sky {
  geometry: THREE.PlaneGeometry;
  material: THREE.RawShaderMaterial;
  group: THREE.Mesh;
  constructor() {
    this.geometry = new THREE.PlaneGeometry(6.5, 6);
    this.material = new THREE.RawShaderMaterial({
      fragmentShader,
      vertexShader,
      uniforms: {},
      side: THREE.DoubleSide,
      transparent: true,
    });
    this.group = new THREE.Mesh(this.geometry, this.material);
    // this.group.rotateY(toRadians(180))
  }

  get position() {
    return this.group.position;
  }

  get uniforms() {
    return this.material.uniforms;
  }

  update() {}
}
