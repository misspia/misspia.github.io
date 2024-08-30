import * as THREE from "three";
import fragmentShader from "@webgl/shaders/sky.frag";
import vertexShader from "@webgl/shaders/sky.vert";
import { Clouds } from "@webgl/Clouds";

export class Sky {
  clouds: Clouds;
  geometry: THREE.PlaneGeometry;
  material: THREE.RawShaderMaterial;
  background: THREE.Mesh;
  group: THREE.Group;
  constructor() {
    this.clouds = new Clouds();
    this.geometry = new THREE.PlaneGeometry(8.5, 8);
    this.material = new THREE.RawShaderMaterial({
      fragmentShader,
      vertexShader,
      uniforms: {},
      side: THREE.DoubleSide,
      transparent: true,
    });
    this.background = new THREE.Mesh(this.geometry, this.material);
    this.group = new THREE.Group();

    this.group.add(this.background);
    this.group.add(this.clouds.group);
  }

  get position() {
    return this.group.position;
  }

  get uniforms() {
    return this.material.uniforms;
  }

  update() {}
}
